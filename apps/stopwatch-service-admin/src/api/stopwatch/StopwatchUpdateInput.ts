import { LapUpdateManyWithoutStopwatchesInput } from "./LapUpdateManyWithoutStopwatchesInput";

export type StopwatchUpdateInput = {
  name?: string | null;
  endTime?: Date | null;
  startTime?: Date | null;
  laps?: LapUpdateManyWithoutStopwatchesInput;
};
