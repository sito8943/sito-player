/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext } from "react";

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
  const [state, setState] = useState(playerState.stopped);

  const pause = () => setState(playerState.pause);
  const play = () => setState(playerState.playing);

  return (
    <PlayerContext.Provider
      value={{ state, setState, pause, play, playlist, setPlaylist }}
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
