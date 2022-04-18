import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AccountCreateInput = {
  amount?: number | null;
  balance?: number | null;
  transaction?: string | null;
  user?: UserWhereUniqueInput | null;
};
