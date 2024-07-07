import { JsonValue } from "type-fest";
import { Session } from "../session/Session";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  sessions?: Array<Session>;
};
