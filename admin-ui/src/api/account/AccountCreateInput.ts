import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AccountCreateInput = {
  amount?: number | null;
  balance?: number | null;
  user?: UserWhereUniqueInput | null;
};
