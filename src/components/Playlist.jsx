import { useCallback, useMemo } from "react";

// providers
import { usePlayer } from "../providers/PlayerProvider";

// utils
import { formatDuration } from "../utils/parse";

function Playlist() {
  const { playlist, currentSong, setIndex } = usePlayer();

  const metaData = useCallback((song) => {
    /* console.log(song.meta); */
    return (
      <>
        <h3>{song.meta.title}</h3> - <p>{formatDuration(song.duration)}</p>
      </>
    );
  }, []);

  const renderList = useMemo(
    () =>
      playlist?.map((song, i) => (
        <li key={i} className="z-1">
          <button
            onClick={() => setIndex(i)}
            type="button"
            className={`${
              currentSong.title !== song.title
                ? "text-background"
                : "text-white current"
            } p-1 flex gap-2 items-center justify-start text-nowrap text-xs`}
          >
            {metaData(song)}
            {currentSong.title === song.title ? metaData(song) : ""}
          </button>
        </li>
      )),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [playlist, currentSong]
  );

  return (
    <ul className="bg-primary min-w-64 max-w-64 h-32 overflow-x-hidden overflow-y-auto flex flex-col gap-1 rounded-2xl py-1 px-2 relative">
      {renderList}
    </ul>
  );
}

export default Playlist;
