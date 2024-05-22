import { SongResultModel } from "@feature/search/models";
import React, { createContext, useState } from "react";

export const MusicPlayerContext = createContext<{
  song: SongResultModel | null;
  setSong: React.Dispatch<React.SetStateAction<SongResultModel | null>>;
}>({ song: null, setSong: () => {} });

export function MusicPlayerProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [song, setSong] = useState<SongResultModel | null>(null);

  return (
    <MusicPlayerContext.Provider value={{ song, setSong }}>
      {children}
    </MusicPlayerContext.Provider>
  );
}
