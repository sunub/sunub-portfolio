import { Pane } from "tweakpane";
import { singleton } from "./singleton";

export function getTweakPane() {
  const pane = singleton("tweakpane", () => new Pane());
  return pane;
}
