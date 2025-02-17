import { useMemo } from "react";

// providers
import { usePlayer } from "../providers/PlayerProvider";

// images

function Song() {
  const { playlist } = usePlayer();

  const currentSong = useMemo(() => {
    const playedSong = playlist.find((song) => song.current);
    return playedSong;
  }, [playlist]);

  return (
    <div className="w-64 h-64 rounded relative">
      <img
        className="min-w-72 h-72 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] object-cover rounded-xl"
        src={currentSong?.image ?? "https://picsum.photos/200/300"}
      />
      <div className="w-full h-full z-10">
        <img
          className="w-full h-full object-cover rounded-xl"
          src={currentSong?.image ?? "https://picsum.photos/200/300"}
        />
      </div>
    </div>
  );
}

export default Song;
