import { SortOrder } from "../../util/SortOrder";

export type LapOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  lapTime?: SortOrder;
  lapNumber?: SortOrder;
  stopwatchId?: SortOrder;
};
