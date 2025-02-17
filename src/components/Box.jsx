// components
import Playlist from "./Playlist";
import Song from "./Song";
import Tools from "./Tools";

// providers
import { usePlayer } from "../providers/PlayerProvider";
import { useEffect, useState } from "react";

// utils
import { audioMeta } from "../utils/parse";

// test
import song from "../assets/songs/test.mp3";

const audio = new Audio(song);
console.log(audio);

function Box() {
  const { currentSong, setPlaylist } = usePlayer();
  const [image, setImage] = useState();

  useEffect(() => {
    setPlaylist([audio]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadImage = async () => {
    const meta = await audioMeta(currentSong);
    setImage(meta.image);
  };

  useEffect(() => {
    loadImage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSong]);

  return (
    <main
      className={`flex flex-col gap-3 items-center justify-center max-w-96 px-10 py-5 m-auto relative`}
    >
      <img
        className="min-w-96 min-h-112 rounded-3xl absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] object-cover object-center blur-xl opacity-50"
        src={image}
        alt={currentSong?.title}
      />
      <Song />
      {/* <Playlist />*/}
      <Tools />
    </main>
  );
}

export default Box;
