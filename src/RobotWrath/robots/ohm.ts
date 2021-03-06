import { robotIcons } from "../Images";
import { Robot } from "../interfaces";

const ohm: Robot<{}> = {
  name: "Ohm",
  color: "#ff3",
  icon: robotIcons.default,
  author: "Nick",
  init: () => ({}),
  execute: (you, robots) => {
    return robots.reduce((highest, current) =>
      highest.power > current.power ? highest : current
    ).robotId;
  },
};

export { ohm };
