import { LapWhereInput } from "./LapWhereInput";
import { LapOrderByInput } from "./LapOrderByInput";

export type LapFindManyArgs = {
  where?: LapWhereInput;
  orderBy?: Array<LapOrderByInput>;
  skip?: number;
  take?: number;
};
