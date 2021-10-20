import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state/action-creators";
import { isInt } from "../../utils";
import "./PlaceInput.scss";
import { CgAdd } from "react-icons/cg";

const PlaceInput = ({ setIsMusicPlaying }) => {
  const dispatch = useDispatch();

  const { placeNewRobot } = bindActionCreators(actionCreators, dispatch);

  const [placedNewRobot, setPlacedNewRobot] = useState({
    x: undefined,
    y: undefined,
    face: undefined,
  });

  const inputXChangeHandler = (e) => {
    if (isInt(e.target.value)) {
      setPlacedNewRobot({
        ...placedNewRobot,
        x: parseInt(e.target.value),
      });
    }
  };

  const inputYChangeHandler = (e) => {
    if (isInt(e.target.value)) {
      setPlacedNewRobot({
        ...placedNewRobot,
        y: parseInt(e.target.value),
      });
    }
  };

  const inputFaceChangeHandler = (e) => {
    if (isInt(e.target.value)) {
      setPlacedNewRobot({
        ...placedNewRobot,
        face: parseInt(e.target.value),
      });
    }
  }; //e.target.value is a string - be careful

  return (
    <div className="place-input">
      <label htmlFor="place-input-x">X: </label>
      <input type="number" id="place-input-x" onChange={inputXChangeHandler} />
      <label htmlFor="place-input-y">Y: </label>
      <input type="number" id="place-input-y" onChange={inputYChangeHandler} />
      <label htmlFor="place-input-face">Facing: </label>
      <select
        id="place-input-face"
        onChange={inputFaceChangeHandler}
        value={placedNewRobot.face}
      >
        <option value=""></option>
        <option value="0">NORTH</option>
        <option value="1">EAST</option>
        <option value="2">SOUTH</option>
        <option value="3">WEST</option>
      </select>
      <button
        onClick={() => {
          setIsMusicPlaying(true);
          placeNewRobot(placedNewRobot);
        }}
      >
        <CgAdd />
        Place New
      </button>
    </div>
  );
};

export default PlaceInput;
