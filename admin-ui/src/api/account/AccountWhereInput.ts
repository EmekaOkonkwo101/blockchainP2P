import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AccountWhereInput = {
  amount?: FloatNullableFilter;
  balance?: FloatNullableFilter;
  id?: StringFilter;
  user?: UserWhereUniqueInput;
};
