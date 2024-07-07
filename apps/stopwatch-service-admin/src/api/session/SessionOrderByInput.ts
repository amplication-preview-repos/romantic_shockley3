import { SortOrder } from "../../util/SortOrder";

export type SessionOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  startTime?: SortOrder;
  userId?: SortOrder;
  endTime?: SortOrder;
};
