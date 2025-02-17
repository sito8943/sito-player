// icons
import {
  faPlay,
  faPause,
  faForwardStep,
  faBackwardStep,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// providers
import { playerState, usePlayer } from "../providers/PlayerProvider";
import { useCallback } from "react";

function Tools() {
  const { state, play, pause, forward, backward } = usePlayer();

  const toggleState = useCallback(() => {
    switch (state) {
      case playerState.pause:
        return play();
      case playerState.playing:
        return pause();
      default:
        return play();
    }
  }, [pause, play, state]);

  return (
    <div className="z-1 flex gap-5 bg-min w-full rounded p-3 items-center justify-between bg-background/90">
      <button className="tool-button" type="button" onClick={() => backward()}>
        <FontAwesomeIcon icon={faBackwardStep} />
      </button>
      <button onClick={toggleState} className="tool-button !w-12 !h-12">
        <FontAwesomeIcon
          icon={state !== playerState.playing ? faPlay : faPause}
        />
      </button>
      <button className="tool-button" onClick={() => forward()}>
        <FontAwesomeIcon icon={faForwardStep} />
      </button>
    </div>
  );
}

export default Tools;
