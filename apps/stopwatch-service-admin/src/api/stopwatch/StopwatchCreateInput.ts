import { LapCreateNestedManyWithoutStopwatchesInput } from "./LapCreateNestedManyWithoutStopwatchesInput";

export type StopwatchCreateInput = {
  name?: string | null;
  endTime?: Date | null;
  startTime?: Date | null;
  laps?: LapCreateNestedManyWithoutStopwatchesInput;
};
