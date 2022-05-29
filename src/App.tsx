import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HomePage } from "./pages";
import { FilteredSearch } from "./pages/FilteredSearch";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/:page" element={<HomePage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/filters" element={<FilteredSearch />} />
    </Routes>
  </BrowserRouter>
);

export default App;
