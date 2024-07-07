import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StopwatchWhereUniqueInput } from "../stopwatch/StopwatchWhereUniqueInput";

export type LapWhereInput = {
  id?: StringFilter;
  lapTime?: DateTimeNullableFilter;
  lapNumber?: IntNullableFilter;
  stopwatch?: StopwatchWhereUniqueInput;
};
