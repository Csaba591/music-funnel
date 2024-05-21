import { SongResultModel } from "@feature/search/models";
import React from "react";

export function SongResult({
  data,
  children,
}: {
  data: SongResultModel;
  children: React.ReactNode;
}) {
  return (
    <div className="box is-flex" style={{ gap: "1.2em" }}>
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
