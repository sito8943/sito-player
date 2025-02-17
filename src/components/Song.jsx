// providers
import { useEffect, useState } from "react";
import { usePlayer } from "../providers/PlayerProvider";

// utils
import { noImage } from "../utils/static";
import { audioMeta } from "../utils/parse";

function Song() {
  const { currentSong } = usePlayer();

  const [image, setImage] = useState();

  const loadImage = async () => {
    const meta = await audioMeta(currentSong);
    setImage(meta.image);
  };

  useEffect(() => {
    loadImage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSong]);

  return (
    <div className="w-64 h-64 relative">
      <div className="w-full h-full">
        <div className="flex items-center justify-center">
          <img
            className="object-cover w-full object-center rounded-2xl"
            src={image ?? noImage}
          />
        </div>
      </div>
    </div>
  );
}

export default Song;
