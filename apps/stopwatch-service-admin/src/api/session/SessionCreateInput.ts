import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SessionCreateInput = {
  startTime?: Date | null;
  user?: UserWhereUniqueInput | null;
  endTime?: Date | null;
};
