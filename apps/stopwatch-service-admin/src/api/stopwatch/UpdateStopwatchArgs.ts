import { StopwatchWhereUniqueInput } from "./StopwatchWhereUniqueInput";
import { StopwatchUpdateInput } from "./StopwatchUpdateInput";

export type UpdateStopwatchArgs = {
  where: StopwatchWhereUniqueInput;
  data: StopwatchUpdateInput;
};
