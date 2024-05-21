import { useStorage } from "@core/hooks";
import { SongResult } from "../components/SongResult";
import { SongResultModel } from "../models";
import { ActivePlaylistContext } from "@core/contexts";
import { useContext } from "react";

export function SearchPage() {
  const results: SongResultModel[] = [
    {
      id: "a",
      title: "Scary Monsters And Nice Sprites",
      artists: ["Skrillex"],
      length: 248,
      imageUrl:
        "https://t2.genius.com/unsafe/340x340/https%3A%2F%2Fimages.genius.com%2Fe4f4e332134c2b175e59a6c0aa01e214.1000x1000x1.jpg",
    },
    {
      id: "b",
      title: "Lies",
      artists: ["MARINA"],
      length: 226,
      imageUrl:
        "https://t2.genius.com/unsafe/340x340/https%3A%2F%2Fimages.genius.com%2Fc65124d356c7af135715b413f4f63f48.1000x1000x1.png",
    },
  ];

  const [savedSongs, setSavedSongs] =
    useStorage<SongResultModel[]>("saved-songs");

  const { activePlaylistId, setActivePlaylistId, playlists, setPlaylists } =
    useContext(ActivePlaylistContext);

  const activePlaylist = playlists?.find(
    (playlist) => playlist.id === activePlaylistId
  );

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
      <input placeholder="Search" type="text" />

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
