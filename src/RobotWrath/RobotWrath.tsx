import React, { useMemo, useState } from "react";
import { RobotList } from "./RobotList/RobotList";
import { robots as submittedRobots } from "./robots";
import { RobotCombatant, TurnEvent } from "./interfaces";
import { advance, generateCombatants, getStatus } from "./gameLogic";
import { EventList } from "./EventList";

interface IProps {}

const RobotWrath: React.FC<IProps> = ({}) => {
  const [robots, setRobots] = useState<RobotCombatant[]>(
    generateCombatants(submittedRobots)
  );

  const [events, setEvents] = useState<TurnEvent[][]>([]);

  const status = useMemo(() => getStatus(robots, events), [robots, events]);

  return (
    <div
      style={{
        width: "calc(100vw - 400px)",
        height: "100vh",
        padding: "0px 200px",
        backgroundColor: "#bfbfde",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ marginBottom: 10 }}>
        <button
          onClick={() => setEvents(events.concat([advance(robots, events)]))}
        >
          Advance
        </button>
      </div>
      <div style={{ height: "calc(100vh - 175px)", display: "flex" }}>
        <div style={{ height: "100%" }}>
          <RobotList robots={robots} status={status} />
        </div>
        <div style={{ height: "100%", marginLeft: 100 }}>
          <EventList robots={robots} events={events} />
        </div>
      </div>
    </div>
  );
};

RobotWrath.displayName = "RobotWrath";
export { RobotWrath };
