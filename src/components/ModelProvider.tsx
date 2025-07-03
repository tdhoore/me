import React, { FC } from "react";
import { GrassStone1Instances } from "./models/GrassStone1";
import { GrassStone2Instances } from "./models/GrassStone2";
import combineComponents from "./combineComponents";
import { BushInstances } from "./models/Bush";
import { TowerInstances } from "./models/Tower";
import { RuinInstances } from "./models/Ruin";
import { TreeInstances } from "./models/Tree";
import { WellInstances } from "./models/Well";

const providers: FC[] = [
  GrassStone1Instances,
  GrassStone2Instances,
  BushInstances,
  TowerInstances,
  RuinInstances,
  TreeInstances,
  WellInstances,
];

export default combineComponents(providers);
