import { Footer, Header, SideBar } from "@core/components";
import { Outlet } from "react-router-dom";

import "./App.css";

export function App() {
  return (
    <div className="app-container is-flex is-flex-direction-column">
      <Header />
      <div className="container columns full-height py-2 is-flex-grow-1">
        <div className="column is-one-quarter">
          <SideBar />
        </div>
        <div className="column">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}
