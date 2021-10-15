import React from "react";
import styled, { keyframes } from "styled-components";
import "./Robot.scss";
// import robot from "../../assets/images/robot.png";
import robotjs from "../../assets/images/robotjs.png";
import { useSelector } from "react-redux";
import { isTrue } from "../../utils";

const colorRotate = keyframes`
  0% {filter:drop-shadow(0 1rem 1rem lightgreen) hue-rotate(0deg);  }
  100% {filter:drop-shadow(0 1rem 1rem lightgreen) hue-rotate(360deg);}
`;

const flame = keyframes`
  0%,20%,40%,60%,80%,100% {
    transform: translateX(-45%) translateY(0);
    background-color: orangered
  }
  10%, 30%,50%,70%,90% {
    transform: translateX(-45%) translateY(-.4rem);
    background-color: orange;
  }
`;

const StyledRobot = styled.span`
  position: absolute;
  width: 18%;
  aspect-ratio: 1;
  display: flex;
  bottom: ${(props) => props.positionY * 20 + 1}%;
  left: ${(props) => props.positionX * 20 + 1}%;
  background-image: url(${robotjs});
  background-size: 100% 100%;
  transform: rotate(${(props) => props.face * 90}deg);
  //${(props) => props.property_name}

  justify-content: center;
  align-items: center;
  opacity: ${(props) => props.isPlaced};

  filter: ${(props) =>
    props.isActived ? "drop-shadow(0 0 1rem red)" : "unset"};

  /* animation: ${colorRotate} 5s linear infinite; */
  transition: all 1s linear;

  &::before {
    content: "${(props) => props.robotNo}"; //wired: have to wrap it with ' '
    color: white;
    position: absolute;
    height: 2.4rem;
    width: 2.4rem;

    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px #fff solid;
  }

  &::after {
    content: "";
    position: absolute;
    border-radius: 50%;
    bottom: -1.5rem;
    left: 50%;
    transform: translateX(-45%);
    width: 2rem;
    height: 2rem;
    background-color: orangered;
    filter: blur(0.8rem);
    opacity: ${props => props.isActived ? 1: 0};
    animation: ${flame} 1s linear infinite;
    z-index: -1;
  }
`;

const Robot = ({ robotNo }) => {
  const robot = useSelector((state) => state.robots.robots.filter((robot) => robot.robotNo === robotNo)[0]);
  
  //if we use  state.robots.robots[robotNo - 1]
  // when deleting one robot, lets say you have 4 robots atm, if robot No.3 got deleted, 

  //robots: [{1}, {2}, {3}, {4}]  -> robots: [{1}, {2}, {4}]
  //robot-rendered: robots[0] robots[1] robots[2] robots[3] -> robots[0] robots[1] robots[3]
  //robots[3] is not available


  const activeRobotNo = useSelector((state) => state.robots.activeRobotNo);

  ///check if the robot has been placed on the table
  const checkIfPlaced = (robot) =>
    isTrue(robot.x) && isTrue(robot.y) && isTrue(robot.face) ? true : false;
  ////////////////////////////////////////////////////////////////////

  //   console.log(robot);
  //   console.log(isTrue(robot.x));
  //   console.log(checkIfPlaced(robot));

  //////////////////////////////////////////////////////
  ////check if the robot is the activated one
  const checkActived = () => {
    if (robot.robotNo === activeRobotNo) {
      return true;
    }
    return false;
  };

  if (robot && checkIfPlaced(robot))
    return (
      <>
        <StyledRobot
          positionX={robot.x}
          positionY={robot.y}
          face={robot.face}
          robotNo={robot.robotNo}
          isActived={checkActived()}
          isPlaced={checkIfPlaced(robot) ? 1 : 0}
        />
      </>
    );

  return null;
};

export default Robot;
