import { StopwatchWhereUniqueInput } from "../stopwatch/StopwatchWhereUniqueInput";

export type LapUpdateInput = {
  lapTime?: Date | null;
  lapNumber?: number | null;
  stopwatch?: StopwatchWhereUniqueInput | null;
};
