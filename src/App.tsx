import { Footer, Header, SideBar } from "@core/components";
import { Outlet } from "react-router-dom";

import "./App.css";
import { PlaylistsProvider } from "@core/contexts";
import { MusicPlayerProvider } from "@core/contexts/MusicPlayerContext";

export function App() {
  return (
    <div className="app-container is-flex is-flex-direction-column">
      <Header />
      <MusicPlayerProvider>
        <div className="container columns full-height py-2 is-flex-grow-1">
          <PlaylistsProvider>
            <div className="column is-one-quarter">
              <SideBar />
            </div>
            <div className="column">
              <Outlet />
            </div>
          </PlaylistsProvider>
        </div>
        <Footer />
      </MusicPlayerProvider>
    </div>
  );
}
