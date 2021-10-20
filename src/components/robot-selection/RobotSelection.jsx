import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  selectRobot,
  deleteRobot,
} from "../../state/action-creators/positionActionCreators";
import "./RobotSelection.scss";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaMousePointer } from "react-icons/fa";

const RobotSelection = () => {
  const robots = useSelector((state) => state.robots.robots);

  const dispatch = useDispatch();

  if (robots.length > 0) {
    return (
      <div className="robot-selection-panel">
        {robots.map((robot) => {
          return (
            <div key={robot.robotNo}>
              <button
                onClick={() => {
                  dispatch(selectRobot(robot.robotNo));
                }}
              >
                <FaMousePointer />
                {robot.robotNo}
              </button>
              <button
                onClick={() => {
                  dispatch(deleteRobot(robot.robotNo));
                }}
              >
                <RiDeleteBinLine />
                {robot.robotNo}
              </button>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <>
      <h2>How to play:</h2>
      <p>1. Put a number between 0-4 for X and Y</p>
      <p>2. Select a facing direction</p>
      <p>
        3. Click place New and now you can use the buttons appeared to control
        the robot
      </p>
      <p>4. You can add or delete robots</p>
    </>
  );
};

export default RobotSelection;
