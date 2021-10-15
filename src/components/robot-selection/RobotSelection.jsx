import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  selectRobot,
  deleteRobot,
} from "../../state/action-creators/positionActionCreators";

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
                {robot.robotNo}
              </button>
              <button
                onClick={() => {
                  dispatch(deleteRobot(robot.robotNo));
                }}
              >
                X - {robot.robotNo}
              </button>
            </div>
          );
        })}
      </div>
    );
  }

  return <div>Place New 1st</div>;
};

export default RobotSelection;
