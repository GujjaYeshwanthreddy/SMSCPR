import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import AppRoutes from "./routes/AppRoutes";

function App() {
  // Controls the expanded/collapsed state of the sidebar
  const [mainMenuOpen, setMainMenuOpen] = useState(true);

  return (
    // Wrap the application with React Router
    <BrowserRouter>
      {/* Top navigation bar */}
      <Navbar
        mainMenuOpen={mainMenuOpen}
        setMainMenuOpen={setMainMenuOpen}
      />

      {/* Render application routes */}
      <AppRoutes mainMenuOpen={mainMenuOpen} />
    </BrowserRouter>
  );
}

export default App;