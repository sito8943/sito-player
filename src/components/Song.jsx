// providers
import { usePlayer } from "../providers/PlayerProvider";

// utils
import { noImage } from "../utils/static";

function Song() {
  const { currentSong } = usePlayer();

  return (
    <div className="w-64 h-64 relative">
      <div className="w-full h-full">
        <div className="flex items-center justify-center">
          <img
            className="object-cover w-full object-center rounded-2xl"
            src={currentSong?.meta?.image ?? noImage}
          />
        </div>
      </div>
    </div>
  );
}

export default Song;
