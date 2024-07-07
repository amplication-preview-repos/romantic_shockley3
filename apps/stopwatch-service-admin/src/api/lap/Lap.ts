import { Stopwatch } from "../stopwatch/Stopwatch";

export type Lap = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  lapTime: Date | null;
  lapNumber: number | null;
  stopwatch?: Stopwatch | null;
};
