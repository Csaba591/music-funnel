import { useStorage } from "@core/hooks";
import { Playlist } from "@core/models";
import { useState } from "react";

export function PlayLists() {
  const [playlists, setPlaylists] = useStorage<Playlist[]>("playlists");

  const [activePlaylist, setActivePlaylist] = useState<string | null>(
    playlists?.[0].id ?? null
  );

  const [newPlaylistName, setNewPlaylistName] = useState<string>("");

  function createPlaylist() {
    setPlaylists((storedPlaylists) => [
      ...(storedPlaylists ?? []),
      { id: String(Date.now()), name: newPlaylistName, songIds: [] },
    ]);
    setNewPlaylistName("");
  }

  return (
    <div className="px-2">
      <div>
        <input
          value={newPlaylistName}
          onChange={(e) => setNewPlaylistName(e.target.value)}
          type="text"
        />
        <button onClick={createPlaylist} className="icon" type="button">
          +
        </button>
      </div>

      {playlists?.map((playlist) => (
        <button
          onClick={() => setActivePlaylist(playlist.id)}
          className={`button is-fullwidth mt-2 ${
            activePlaylist === playlist.id ? "has-text-weight-bold" : ""
          }`}
          key={playlist.id}
        >
          {playlist.name}
        </button>
      ))}
    </div>
  );
}
