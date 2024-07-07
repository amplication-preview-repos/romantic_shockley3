import { Stopwatch as TStopwatch } from "../api/stopwatch/Stopwatch";

export const STOPWATCH_TITLE_FIELD = "name";

export const StopwatchTitle = (record: TStopwatch): string => {
  return record.name?.toString() || String(record.id);
};
