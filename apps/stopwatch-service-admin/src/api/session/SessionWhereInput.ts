import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SessionWhereInput = {
  id?: StringFilter;
  startTime?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
  endTime?: DateTimeNullableFilter;
};
