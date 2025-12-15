import { FaInstagram, FaFacebook } from "react-icons/fa";
import { MdEmail, MdCall } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="w-full bg-white text-gray-800 py-12 px-6 md:px-16">

      <div className="
        max-w-6xl mx-auto 
        grid grid-cols-2
        md:grid-cols-3 
        gap-10
      ">

        {/* COLUMN 1 — SUNNY’S IN A BOTTLE */}
        <div>
          <h2 className="text-xl font-semibold text-[#2F820C] mb-3">
            SUNNY’S IN A BOTTLE
          </h2>

          <p className="text-[#525252] leading-[22px] text-[15px]">
            Take the legendary taste home.
          </p>
          <p className="text-[#525252] leading-[22px] text-[15px] mb-6">
            Taste-Tested. Guest-Approved.
          </p>

          {/* MOBILE ONLY: CONNECT WITH US under Sunny's */}
          <div className="block md:hidden">
            <h2 className="text-xl font-semibold text-[#2F820C] mb-3">
              Connect with us
            </h2>

            <div className="flex gap-4">
              <a
                href="https://instagram.com/sunnys_in_a_bottle"
                target="_blank"
                className="w-10 h-10 bg-[#2F820C] rounded-full flex items-center justify-center text-white"
              >
                <FaInstagram />
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                className="w-10 h-10 bg-[#2F820C] rounded-full flex items-center justify-center text-white"
              >
                <FaFacebook />
              </a>
            </div>
          </div>

        </div>

        {/* COLUMN 2 — CONTACT */}
        <div className="md:pl-10">
          <h2 className="text-xl font-semibold text-[#2F820C] mb-3">
            Contact
          </h2>

          <p className="text-[#525252] text-[15px] leading-[22px] mb-3">
            20, Paul’s Castle, Castle Street, Ashok Nagar <br />
            Bangalore, Karnataka <br />
            560025
          </p>


          {/* Email */}

          <div className="grid grid-cols-[auto_minmax(0,1fr)] gap-2 mb-2">
            {/* <MdEmail className="text-[#2F820C] mt-1 shrink-0" /> */}
            <a
              href="mailto:sunnysandmore@yahoo.com"
              className="text-[#525252] text-sm sm:text-base break-all min-w-0"
            >
              sunnysandmore@yahoo.com
            </a>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-2">
            {/* <MdCall className="text-[#2F820C]" /> */}
            <a href="tel:+91988601268" className="text-[#525252]">
              +91 98860 1268
            </a>
          </div>
        </div>

        {/* COLUMN 3 — CONNECT WITH US (DESKTOP ONLY) */}
        <div className="hidden md:block">
          <h2 className="text-xl font-semibold text-[#2F820C] mb-3">
            Connect with us
          </h2>

          <div className="flex gap-4">
            <a
              href="https://instagram.com/sunnys_in_a_bottle"
              target="_blank"
              className="w-10 h-10 bg-[#2F820C] rounded-full flex items-center justify-center text-white"
            >
              <FaInstagram />
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              className="w-10 h-10 bg-[#2F820C] rounded-full flex items-center justify-center text-white"
            >
              <FaFacebook />
            </a>
          </div>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="mt-10 border-t border-gray-300 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Sunny’s In A Bottle. All rights reserved.
        Design & Developed by Social Santa.
      </div>

    </footer>
  );
};

export default Footer;
