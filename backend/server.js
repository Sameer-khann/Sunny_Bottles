import express from "express";
import multer from "multer";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Fix __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors({ origin: "http://localhost:5173" })); // React dev server
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Create uploads folder
const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

// Test route
app.get("/", (req, res) => res.send("✅ Backend is running!"));

// Send email route
app.post("/send-email", upload.single("file"), async (req, res) => {
  const { firstName, lastName, email, message, postalCode } = req.body;
  const file = req.file;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,  // <- NEVER use user's email here
      to: process.env.EMAIL_RECEIVER,
      replyTo: email,
      subject: `New Contact Form - Sunny's Bottles`,
      text: `
    New customer message:

    First Name: ${firstName}
    Last Name: ${lastName}
    Email: ${email}
    Postal Code: ${postalCode}
    Message: ${message}

    (Attachment uploaded: ${file ? file.originalname : "No"})
  `,
    };

    await transporter.sendMail(mailOptions);

    // Delete uploaded file after sending
    if (file && fs.existsSync(file.path)) fs.unlinkSync(file.path);

    res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
});

app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
