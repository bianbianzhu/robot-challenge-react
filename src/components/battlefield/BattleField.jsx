import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Robot from '../Robot/Robot';
import './BattleField.scss'
const BattleField = () => {


    const robots = useSelector(state => state.robots.robots)


    
    return (
        <div className="battlefield">
            {
                robots.map((robot) => {
                    return <Robot key={robot.robotNo} robotNo={robot.robotNo} />
                })
            }
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default BattleField;