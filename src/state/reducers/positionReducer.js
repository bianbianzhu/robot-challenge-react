import { isTrue } from "../../utils";

const initialState = {
  totalNo: 0,
  activeRobotNo: undefined,
  robots: [
    // {
    //   robotNo: 1,
    //   x: 0,
    //   y: 0,
    //   face: 0,
    //   isReporting: false,
    // },
  ],
};

// {
//   robotNo: undefined,
//   x: undefined,
//   y: undefined,
//   face: undefined,
//   isReporting: false,
// }; //face must be 0, 1, 2, 3


const positionReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PLACE NEW": {
      if (
        action.payload.x >= 0 &&
        action.payload.y >= 0 &&
        action.payload.x <= 4 &&
        action.payload.y <= 4 &&
        isTrue(action.payload.face)
      ) {
        return {
          ...state,
          totalNo: ++state.totalNo,
          // activeRobotNo: state.robots.length + 1, //new robot is the active robot
          activeRobotNo: state.totalNo,
          robots: [
            ...state.robots,
            {
              robotNo: state.totalNo,// this is apparently not correct. If one robot got deleted, then the next robot you add will have a repulicated robotNo. -- try to make the robotNo a global variable -- like count. 
              x: action.payload.x,
              y: action.payload.y,
              face: action.payload.face,
              isReporting: false,
            },
          ],
        };
      }

      return state;

      // case "PLACE":
      //   if (
      //     action.payload.x >= 0 &&
      //     action.payload.y >= 0 &&
      //     action.payload.x <= 4 &&
      //     action.payload.y <= 4
      //   ) {
      //     return {
      //       ...state,
      //       x: action.payload.x,
      //       y: action.payload.y,
      //       face: action.payload.face,
      //       isReporting: false,
      //     };
      //   }

      //   return state;
    }

    case "MOVE": {
      // const index = state.robots.findIndex(
      //   (robot) => robot.robotNo === action.payload
      // );
      // const newArray = [...state.robots];
      // const activedRobot = newArray[index];

      const newArray = state.robots.map((robot) => {
        if (robot.robotNo === action.payload) {
          if (robot.face === 0 && robot.y < 4) {
            return {
              ...robot,
              y: ++robot.y,
              isReporting: false,
            };
          }
          if (robot.face === 1 && robot.x < 4) {
            return {
              ...robot,
              x: ++robot.x,
              isReporting: false,
            };
          }
          if (robot.face === 2 && robot.y > 0) {
            return {
              ...robot,
              y: --robot.y,
              isReporting: false,
            };
          }
          if (robot.face === 3 && robot.x > 0) {
            return {
              ...robot,
              x: --robot.x,
              isReporting: false,
            };
          }
          return robot; //be careful here
        } 
        return robot;
        
      });

      // if (activedRobot.face === 0 && activedRobot.y < 4) {
      //   // return { ...state, y: ++state.y, isReporting: false };

      //   // let copiedState = {...state}
      //   // ++copiedState.robots[activeRobotNo].y //y increaded by one
      //   // copiedState.robots[activeRobotNo].isReporting = false //disable reporting
      //   // return copiedState

      //   ++activedRobot.y;
      //   activedRobot.isReporting = false;

      //   return {
      //     ...state,
      //     robots: newArray,
      //   };
      // }

      // if (activedRobot.face === 1 && activedRobot.x < 4) {
      //   // return { ...state, x: ++state.x, isReporting: false };
      //   ++activedRobot.x;
      //   activedRobot.isReporting = false;

      //   return {
      //     ...state,
      //     robots: newArray,
      //   };
      // }

      // if (activedRobot.face === 2 && activedRobot.y > 0) {
      //   // return { ...state, y: --state.y, isReporting: false };

      //   --activedRobot.y;
      //   activedRobot.isReporting = false;

      //   return {
      //     ...state,
      //     robots: newArray,
      //   };
      // }

      // if (activedRobot.face === 3 && activedRobot.x > 0) {
      //   // return { ...state, x: --state.x, isReporting: false };
      //   --activedRobot.x;
      //   activedRobot.isReporting = false;

      return {
        ...state,
        robots: newArray,
      };
    }

    case "LEFT": {
      // const index = state.robots.findIndex(
      //   (robot) => robot.robotNo === action.payload
      // );
      // const newArray = [...state.robots];
      // const activedRobot = newArray[index];
      // if (activedRobot.face === 0) {
      //   // return { ...state, face: 3, isReporting: false };

      //   activedRobot.face = 3;
      //   activedRobot.isReporting = false; //disable reporting
      //   return {
      //     ...state,
      //     robots: newArray,
      //   };
      // } else {
      //   // return {
      //   //   ...state,
      //   //   face: Math.abs((activedRobot.face - 1) % 4),
      //   //   isReporting: false,
      //   // };

      //   activedRobot.face = Math.abs((activedRobot.face - 1) % 4);
      //   activedRobot.isReporting = false; //disable reporting

      const newArray = state.robots.map((robot) => {
        if (robot.robotNo === action.payload) {
          if (robot.face === 0) {
            return {
              ...robot,
              face: 3,
              isReporting: false,
            };
          }
          return {
            ...robot,
            face: Math.abs((robot.face - 1) % 4),
            isReporting: false,
          };
        } else {
          return robot;
        }
      });

      return {
        ...state,
        robots: newArray,
      };
    }

    case "RIGHT": {
      ////////////////////////////////////////////////////////////
      // const index = state.robots.findIndex(
      //   (robot) => robot.robotNo === action.payload
      // );
      // const newArray = [...state.robots];
      // const activedRobot = newArray[index];
      // activedRobot.face = Math.abs((activedRobot.face + 1) % 4);
      // activedRobot.isReporting = false; //disable reporting
      // return {
      //   ...state,
      //   robots: newArray,
      // };
      /////////////////////////////////////////////////////////////
      // return {
      //   ...state,
      //   face: Math.abs((state.face + 1) % 4),
      //   isReporting: false,
      // };

      ////////////////////////map way working////////////////////////////
      const newArray = state.robots.map((robot) => {
        if (robot.robotNo === action.payload) {
          return {
            ...robot,
            face: Math.abs((robot.face + 1) % 4),
            isReporting: false,
          };
        } else {
          return robot;
        }
      });

      return {
        ...state,
        robots: newArray,
      };
    }

    case "REPORT": {
      //////////////////////////////findIndex way is not working/////////////////////////////
      // const index = state.robots.findIndex((robot) => robot.robotNo === action.payload)
      // const newArray = [...state.robots]
      // const activedRobot = newArray[index]
      //  activedRobot.isReporting = true //ensable reporting

      /////////////////////map way is working////////////////////////////////////////////

      const newArray = state.robots.map((robot) => {
        
        if (robot.robotNo === action.payload) {
          return {
            ...robot,
            isReporting: true,
          };
        } else {
          console.log('wrong 1');
          return robot;
        }
      });
      
      return {
        ...state,
        robots: newArray,
      };
    }

    case "RESET": {
      return {
        ...state,
        totalNo: 0,
        activeRobotNo: undefined,
        robots: [],
      };
    }

    case "SELECT": {
      return {
        ...state,
        activeRobotNo: action.payload,
      };
    }

    case "DELETE": {
      const filteredRobots = state.robots.filter(
        (robot) => robot.robotNo !== action.payload
      );

      // const filteredRobots = state.robots.map((robot) => {

      //   if (robot.robotNo !== action.payload) {
      //     return robot
      //   }

      //   return {
      //     robotNo: undefined,
      //     x: undefined,
      //     y: undefined,
      //     face: undefined,
      //     isReporting: false
      //   }
      // })

      if (filteredRobots.length === 0) {
        return {
          ...state,
          activeRobotNo: undefined,
          robots: [],
        };
      }

      if (filteredRobots.length > 0 && state.activeRobotNo === action.payload) {

        const allRobotNo = filteredRobots.map(robot => (robot.robotNo))
        return {
          ...state,
          activeRobotNo: Math.max.apply(Math, allRobotNo),//find the max number in the array
          robots: filteredRobots,
        };
      }


      return {
        ...state,
        robots: filteredRobots,
      };
    }

    default:
      return state;
  }
};

// console.log(positionReducer({x: 1, y: 2, face: 0}, {type: "RIGHT"}));

export default positionReducer;
