import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SessionUpdateInput = {
  startTime?: Date | null;
  user?: UserWhereUniqueInput | null;
  endTime?: Date | null;
};
