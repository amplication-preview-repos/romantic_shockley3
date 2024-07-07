import { SortOrder } from "../../util/SortOrder";

export type StopwatchOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  endTime?: SortOrder;
  startTime?: SortOrder;
};
