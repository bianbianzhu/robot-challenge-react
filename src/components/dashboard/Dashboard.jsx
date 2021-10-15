import React from 'react';
import { useSelector } from 'react-redux';

const Dashboard = () => {

    const robot = useSelector((state) => state.robots.robots.filter((robot) => robot.robotNo === state.robots.activeRobotNo)[0]);
   
    if (robot) {
        let face;

        if (robot.face === 0) {
            face = 'NORTH'
        }
    
        if (robot.face === 1) {
            face = "EAST"
        }
    
        if (robot.face === 2) {
            face = "SOUTH"
        }
    
        if (robot.face === 3) {
            face = "WEST";
        }
    
        return (
            <div>
                <h2>DashBoard</h2>
                <h3>{robot.isReporting === true ? `Output: ${robot.x},${robot.y},${face}` : ''}</h3>
            </div>
        );
    }

    return (
        <div>
            <h2>DashBoard</h2>
        </div>
    )

    

};

export default Dashboard;