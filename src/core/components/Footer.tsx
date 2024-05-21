import YouTube from "react-youtube";

export function Footer() {
  const opts = {
    height: "160",
    width: "280",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <footer className="has-background-light">
      <YouTube videoId="ZBJjOvQqW70" opts={opts} />
    </footer>
  );
}
