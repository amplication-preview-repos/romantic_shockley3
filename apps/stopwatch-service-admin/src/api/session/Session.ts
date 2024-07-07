import { User } from "../user/User";

export type Session = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  startTime: Date | null;
  user?: User | null;
  endTime: Date | null;
};
