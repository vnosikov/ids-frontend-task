import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HomePage } from "./pages";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/:page" element={<HomePage />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  </BrowserRouter>
)

export default App;
