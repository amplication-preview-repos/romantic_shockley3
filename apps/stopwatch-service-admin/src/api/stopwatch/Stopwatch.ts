import { Lap } from "../lap/Lap";

export type Stopwatch = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  endTime: Date | null;
  startTime: Date | null;
  laps?: Array<Lap>;
};
