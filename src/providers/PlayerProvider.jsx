/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useState,
  useContext,
  useMemo,
  useCallback,
} from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

const PlayerContext = createContext();

export const playerState = {
  playing: 1,
  pause: 2,
  stopped: 3,
};

/**
 * Player Provider
 * @param {object} props - provider props
 * @returns Provider
 */
const PlayerProvider = (props) => {
  const { children } = props;

  const [playlist, setPlaylist] = useState([]);

  const [index, setIndex] = useState(0);

  const forward = useCallback(() => {
    if (index < playlist.length) setIndex(index + 1);
    else setIndex(0);
  }, [index, playlist.length]);

  const backward = useCallback(() => {
    if (index > 0) setIndex(index - 1);
    else setIndex(playlist.length - 1);
  }, [index, playlist.length]);

  const [state, setState] = useState(playerState.stopped);

  const currentSong = useMemo(() => {
    return playlist[index];
  }, [index, playlist]);

  const pause = useCallback(() => {
    currentSong.pause();
    setState(playerState.pause);
  }, [currentSong]);

  const play = useCallback(() => {
    currentSong.play();
    setState(playerState.playing);
  }, [currentSong]);

  return (
    <PlayerContext.Provider
      value={{
        currentSong,
        setIndex,
        state,
        setState,
        pause,
        play,
        playlist,
        setPlaylist,
        backward,
        forward,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

PlayerProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

/**
 * usePlayer hook
 * @returns function hook
 */
const usePlayer = () => {
  const context = useContext(PlayerContext);
  if (context === undefined)
    throw new Error("playerContext must be used within a Provider");
  return context;
};

export { PlayerProvider, usePlayer };
