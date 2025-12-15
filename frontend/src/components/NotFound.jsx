// import React from "react";

// const NotFound = () => {
//   return <h1>Welcome to Home Page</h1>;
// };

// export default NotFound;

import React from "react";
// import { Link } from "react-router-dom";


const NotFound = () => {
  return (
    <div style={{ textAlign: "center", padding: "60px" }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for doesn't exist.</p>
      <a href="/" style={{ fontSize: "18px" }}>Go Back Home</a>
    </div>
  );
};

export default NotFound;

