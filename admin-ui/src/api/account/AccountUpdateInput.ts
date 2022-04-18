import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AccountUpdateInput = {
  amount?: number | null;
  balance?: number | null;
  transaction?: string | null;
  user?: UserWhereUniqueInput | null;
};
