import { StopwatchWhereUniqueInput } from "../stopwatch/StopwatchWhereUniqueInput";

export type LapCreateInput = {
  lapTime?: Date | null;
  lapNumber?: number | null;
  stopwatch?: StopwatchWhereUniqueInput | null;
};
