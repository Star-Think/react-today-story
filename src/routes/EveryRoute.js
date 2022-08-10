import React from "react";

import { Routes, Route } from "react-router-dom";
import EveryDetail from "../pages/every/EveryDetail";
import EveryMain from "../pages/every/EveryMain";

const EveryRoute = () => {
  return (
    <Routes>
      <Route exact path="/" element={<EveryMain />} />
      <Route exact path="/detail/:idx" element={<EveryDetail />} />
    </Routes>
  );
};

export default EveryRoute;
