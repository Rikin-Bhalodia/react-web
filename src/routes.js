import React from "react";

import SIGNIN from "./pages/signin";
import SIGNUP from "./pages/signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OTPVERIFY from "./pages/otpverify";

// import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SIGNUP />} />
        {/* <Route path="*" element={<NotFound />} /> */}
        <Route path="/signin" element={<SIGNIN />} />
        <Route path="/otpverify" element={<OTPVERIFY />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
