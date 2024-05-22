import { MusicPlayerContext } from "@core/contexts/MusicPlayerContext";
import { SongResultModel } from "@feature/search/models";
import React, { useContext } from "react";

export function SongResult({
  data,
  children,
}: {
  data: SongResultModel;
  children: React.ReactNode;
}) {
  const { song, setSong } = useContext(MusicPlayerContext);

  function playSong() {
    setSong(data);
  }

  return (
    <div className="box is-flex" style={{ gap: "1.2em" }}>
      <button onClick={playSong} type="button">
        Play
      </button>
      <img className="image is-64x64" src={data.imageUrl} />
      <div>
        <div>{data.title}</div>
        <div>{data.artists.join(", ")}</div>
      </div>
      <span className="ml-auto">{data.length}</span>

      {children}
    </div>
  );
}
