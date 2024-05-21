import { useStorage } from "@core/hooks";
import { Playlist } from "@core/models";
import React, { createContext, useState } from "react";

export const ActivePlaylistContext = createContext<{
  activePlaylistId: string | null;
  setActivePlaylistId: React.Dispatch<React.SetStateAction<string | null>>;
  playlists: Playlist[] | null;
  setPlaylists: React.Dispatch<React.SetStateAction<Playlist[] | null>>;
}>({
  activePlaylistId: null,
  setActivePlaylistId: () => {},
  playlists: null,
  setPlaylists: () => {},
});

export function PlaylistsProvider({ children }: { children: React.ReactNode }) {
  const [activePlaylist, setActivePlaylist] = useState<string | null>(null);
  const [playlists, setPlaylists] = useStorage<Playlist[] | null>("playlists");

  const value = {
    activePlaylistId: activePlaylist,
    setActivePlaylistId: setActivePlaylist,
    playlists: playlists,
    setPlaylists: setPlaylists,
  };

  return (
    <ActivePlaylistContext.Provider value={value}>
      {children}
    </ActivePlaylistContext.Provider>
  );
}
