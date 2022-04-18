import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type GunUpdateInput = {
  message?: UserWhereUniqueInput | null;
  name?: string | null;
};
