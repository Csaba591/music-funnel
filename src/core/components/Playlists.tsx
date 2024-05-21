import { ActivePlaylistContext } from "@core/contexts";
import { useContext, useState } from "react";

export function PlayLists() {
  const { activePlaylistId, setActivePlaylistId, playlists, setPlaylists } =
    useContext(ActivePlaylistContext);

  const playlistsSorted = playlists?.sort((a, b) => a.id.localeCompare(b.id));

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

      {playlistsSorted?.map((playlist) => (
        <button
          onClick={() => setActivePlaylistId(playlist.id)}
          className={`button is-fullwidth mt-2 ${
            activePlaylistId === playlist.id ? "has-text-weight-bold" : ""
          }`}
          key={playlist.id}
        >
          {playlist.name}
        </button>
      ))}
    </div>
  );
}
