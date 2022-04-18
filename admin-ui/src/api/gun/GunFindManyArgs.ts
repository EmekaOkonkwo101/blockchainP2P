import { GunWhereInput } from "./GunWhereInput";
import { GunOrderByInput } from "./GunOrderByInput";

export type GunFindManyArgs = {
  where?: GunWhereInput;
  orderBy?: Array<GunOrderByInput>;
  skip?: number;
  take?: number;
};
