import { MusicPlayerContext } from "@core/contexts/MusicPlayerContext";
import { useContext } from "react";
import YouTube from "react-youtube";

export function Footer() {
  const { song, setSong } = useContext(MusicPlayerContext);

  const opts = {
    height: "160",
    width: "280",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  function getYTVideoId(url: string): string {
    return new URL(url).searchParams.get("v")!;
  }

  return (
    <footer className="has-background-light">
      {song && song.source === "youtube" && (
        <YouTube videoId={getYTVideoId(song.url)} opts={opts} />
      )}
    </footer>
  );
}
