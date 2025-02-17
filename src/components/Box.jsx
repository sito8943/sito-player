// components
import Playlist from "./Playlist";
import Song from "./Song";
import Tools from "./Tools";

// providers
import { usePlayer } from "../providers/PlayerProvider";
import { useEffect } from "react";

// utils
import { parseAudios } from "../utils/parse";
import { noImage } from "../utils/static";

// test
import song from "../assets/songs/test.mp3";

const audio = new Audio(song);
console.log(audio);

function Box() {
  const { currentSong, setPlaylist } = usePlayer();

  const parseTheSongs = async (audios) => {
    const parsed = await parseAudios(audios);
    setPlaylist(parsed);
  };

  useEffect(() => {
    parseTheSongs([audio]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main
      className={`flex gap-3 items-center justify-center max-w-96 px-10 py-5 m-auto relative`}
    >
      <img
        className="min-w-96 min-h-112 rounded-3xl absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] object-cover object-center blur-xl opacity-20"
        src={currentSong?.meta?.image ?? noImage}
        alt={currentSong?.title}
      />
      <div className="z-1 flex flex-col gap-3">
        <Song />
        <Tools />
      </div>
      <Playlist />
    </main>
  );
}

export default Box;
