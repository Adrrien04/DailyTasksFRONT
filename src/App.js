import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QuetesPage from "./Pages/QuetesPage";


function App() {
  return (
      <Router>
        <Routes>
          <Route path="/quetes" element={<QuetesPage />} />
        </Routes>
      </Router>
  );
}

export default App;
