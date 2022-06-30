import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// HOME PAGE COMPONENT
import OrganizerHome from "./Home";

const OrganizerRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OrganizerHome />} />
      </Routes>
    </BrowserRouter>
  );
};

export default OrganizerRouter;
