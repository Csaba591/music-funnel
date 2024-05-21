import { Footer, Header } from "@core/components";
import { Outlet } from "react-router-dom";

import "./App.css";

export function App() {
  return (
    <div className="app-container is-flex is-flex-direction-column">
      <Header />
      <div className="full-height py-2 is-flex-grow-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
