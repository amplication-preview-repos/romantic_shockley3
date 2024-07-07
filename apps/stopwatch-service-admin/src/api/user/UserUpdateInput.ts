import { InputJsonValue } from "../../types";
import { SessionUpdateManyWithoutUsersInput } from "./SessionUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  sessions?: SessionUpdateManyWithoutUsersInput;
};
