import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { LapListRelationFilter } from "../lap/LapListRelationFilter";

export type StopwatchWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  endTime?: DateTimeNullableFilter;
  startTime?: DateTimeNullableFilter;
  laps?: LapListRelationFilter;
};
