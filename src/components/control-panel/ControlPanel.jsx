import React from "react";
import "./ControlPanel.scss";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "../../state/action-creators";
import { bindActionCreators } from "redux";
import PlaceInput from "../place-input/PlaceInput";
import { CgCornerUpRight, CgCornerUpLeft } from "react-icons/cg";
import { BiMoveVertical, BiReset, BiShow } from "react-icons/bi";

const ControlPanel = ({ setIsMusicPlaying }) => {
  // const robot = useSelector((state) => state.robots.robots[state.robots.activeRobotNo-1]);

  const robots = useSelector((state) => state.robots.robots);
  const activeRobotNo = useSelector((state) => state.robots.activeRobotNo);

  const dispatch = useDispatch();

  // const checkIfPlaced = (robot) =>
  //   isTrue(robot.x) && isTrue(robot.y) && isTrue(robot.face)
  //     ? true
  //     : false;

  const {
    moveRobot,
    leftTurnRobot,
    rightTurnRobot,
    reportPosition,
    resetBattle,
  } = bindActionCreators(actionCreators, dispatch);

  if (robots.length > 0)
    return (
      <div className="control-panel">
        <PlaceInput setIsMusicPlaying={setIsMusicPlaying} />
        <button
          onClick={() => {
            resetBattle();
            setIsMusicPlaying(false);
          }}
        >
          <BiReset />
          Reset
        </button>
        <button
          onClick={() => {
            moveRobot(activeRobotNo);
          }}
          // disabled={checkIfPlaced(robot) ? false : true}
        >
          <BiMoveVertical />
          Move
        </button>
        <button
          onClick={() => {
            leftTurnRobot(activeRobotNo);
          }}
          // disabled={checkIfPlaced(robot) ? false : true}
        >
          <CgCornerUpLeft />
          Turn Left
        </button>
        <button
          onClick={() => {
            rightTurnRobot(activeRobotNo);
          }}
          // disabled={checkIfPlaced(robot) ? false : true}
        >
          <CgCornerUpRight />
          Turn right
        </button>

        <button
          onClick={() => {
            reportPosition(activeRobotNo);
          }}
          // disabled={checkIfPlaced(robot) ? false : true}
        >
          <BiShow />
          Report
        </button>
      </div>
    );

  return <PlaceInput setIsMusicPlaying={setIsMusicPlaying} />;
};

export default ControlPanel;
