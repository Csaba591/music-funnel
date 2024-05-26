import { useStorage } from "@core/hooks";
import { SongResult } from "../components/SongResult";
import { SongResultModel } from "../models";
import { ActivePlaylistContext } from "@core/contexts";
import { useContext, useState } from "react";
import { querySongs } from "../api/song-search.api";

export function SearchPage() {
  const { activePlaylistId, setActivePlaylistId, playlists, setPlaylists } =
    useContext(ActivePlaylistContext);

  const activePlaylist = playlists?.find(
    (playlist) => playlist.id === activePlaylistId
  );

  const [query, setQuery] = useState<string>("");

  const results = querySongs(query);

  function isSongSaved(song: SongResultModel) {
    return (
      activePlaylist && activePlaylist.songIds.some((id) => id === song.id)
    );
  }

  function removeSong(song: SongResultModel) {
    setPlaylists((storedPlaylists) => {
      if (!storedPlaylists || !activePlaylist) return storedPlaylists;

      const updatedActivePlaylist = {
        ...activePlaylist,
        songIds: activePlaylist.songIds.filter((id) => id !== song.id),
      };

      return [
        ...storedPlaylists.filter(
          (playlist) => playlist.id !== activePlaylistId
        ),
        updatedActivePlaylist,
      ];
    });
  }

  function saveSong(song: SongResultModel) {
    setPlaylists((storedPlaylists) => {
      if (!storedPlaylists || !activePlaylist) return storedPlaylists;

      const updatedActivePlaylist = {
        ...activePlaylist,
        songIds: [...activePlaylist.songIds, song.id],
      };

      return [
        ...storedPlaylists.filter(
          (playlist) => playlist.id !== activePlaylistId
        ),
        updatedActivePlaylist,
      ];
    });
  }

  return (
    <main>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search"
        type="text"
      />

      <section className="results">
        {results.map((result) => (
          <SongResult data={result} key={result.id}>
            {!isSongSaved(result) ? (
              <button onClick={() => saveSong(result)} type="button">
                <span className="icon">+</span>
              </button>
            ) : (
              <button onClick={() => removeSong(result)} type="button">
                <span className="icon">-</span>
              </button>
            )}
          </SongResult>
        ))}
      </section>
    </main>
  );
}
