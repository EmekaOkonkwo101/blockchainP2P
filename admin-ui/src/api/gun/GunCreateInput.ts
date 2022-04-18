import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type GunCreateInput = {
  message?: UserWhereUniqueInput | null;
  name?: string | null;
};
