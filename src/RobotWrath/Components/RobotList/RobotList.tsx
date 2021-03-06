import React from "react";
import FlipMove from "react-flip-move";
import { RobotCombatant, RobotStatus } from "../../interfaces";
import { RobotDisplay } from "./RobotDisplay";
import styles from "./robotList.module.css";

interface IProps {
  robots: RobotCombatant[];
  status: RobotStatus[];
}

const RobotList: React.FC<IProps> = ({ robots, status }) => {
  return (
    <div className={styles.robotList}>
      <FlipMove>
        {status
          .sort((a, b) => b.health - a.health)
          .map((s) => (
            <RobotDisplay
              key={s.robotId}
              robot={robots.find((r) => r.id == s.robotId)!}
              status={s}
            />
          ))}
      </FlipMove>
    </div>
  );
};

RobotList.displayName = "RobotList";
export { RobotList };
