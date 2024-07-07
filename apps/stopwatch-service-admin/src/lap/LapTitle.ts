import { Lap as TLap } from "../api/lap/Lap";

export const LAP_TITLE_FIELD = "id";

export const LapTitle = (record: TLap): string => {
  return record.id?.toString() || String(record.id);
};
