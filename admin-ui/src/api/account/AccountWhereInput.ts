import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AccountWhereInput = {
  amount?: FloatNullableFilter;
  balance?: FloatNullableFilter;
  id?: StringFilter;
  transaction?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
