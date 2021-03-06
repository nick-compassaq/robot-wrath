import React, { forwardRef } from "react";
import styles from "./robotList.module.css";
import robotImage from "../Images/robot.png";
import boomImage from "../Images/boom.png";
import { RobotIcon } from "../RobotIcon";
import { RobotCombatant, RobotStatus } from "../../interfaces";

interface IProps {
  robot: RobotCombatant;
  status: RobotStatus;
}

const RobotDisplay: React.FC<IProps> = forwardRef<HTMLDivElement, IProps>(
  ({ robot, status }, ref) => {
    const displayHealth = Math.max(status.health, 0);

    return (
      <div ref={ref} className={styles.robotDisplay}>
        <div className={styles.author}>
          <div style={{ marginRight: 2 }}>🛠</div>{" "}
          <div style={{ marginTop: 3 }}>{robot.author}</div>
        </div>
        <div className={styles.internal}>
          <RobotIcon robot={robot} boom={status.health <= 0} />
          <div style={{ padding: 10 }}>
            <div className={styles.name}>{robot.name}</div>
            <div className={styles.stats}>
              <div className={styles.powerWrapper}>
                Power: <span className={styles.power}>{status.power}</span>
              </div>
              <div className={styles.healthWrapper}>
                Health:
                <div className={styles.healthBar}>
                  <div
                    style={{
                      position: "absolute",
                      top: 4,
                      left: 10,
                      color: "white",
                    }}
                  >
                    {displayHealth}
                  </div>
                  <div
                    className={styles.filledHealthBar}
                    style={{ width: displayHealth / 10 + "%" }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: 4,
                        left: 10,
                        color: "black",
                      }}
                    >
                      {displayHealth}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

RobotDisplay.displayName = "RobotDisplay";
export { RobotDisplay };
