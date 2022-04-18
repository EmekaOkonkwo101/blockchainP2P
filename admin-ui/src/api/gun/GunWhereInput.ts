import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type GunWhereInput = {
  id?: StringFilter;
  message?: UserWhereUniqueInput;
  name?: StringNullableFilter;
};
