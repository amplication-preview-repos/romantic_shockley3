import { StopwatchWhereInput } from "./StopwatchWhereInput";
import { StopwatchOrderByInput } from "./StopwatchOrderByInput";

export type StopwatchFindManyArgs = {
  where?: StopwatchWhereInput;
  orderBy?: Array<StopwatchOrderByInput>;
  skip?: number;
  take?: number;
};
