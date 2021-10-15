import React, { useState } from "react";
import TableTop from "../components/tableTop/TableTop";
import ControlPanel from "../components/control-panel/ControlPanel";
import Dashboard from "../components/dashboard/Dashboard";
import "./RobotStage.scss";
import Player from "../components/music-player/Player";
import RobotSelection from "../components/robot-selection/RobotSelection";

const RobotStage = () => {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  return (
    <main className="robot-stage">
      <div className="robot-stage__game-part">
        <TableTop />
      </div>
      <div className="robot-stage__control-part">
        <Dashboard />
        <ControlPanel setIsMusicPlaying={setIsMusicPlaying} />
        <RobotSelection />
      </div>
      <Player
        url={"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3"}
        isMusicPlaying={isMusicPlaying}
        setIsMusicPlaying={setIsMusicPlaying}
      />
    </main>
  );
};

export default RobotStage;
