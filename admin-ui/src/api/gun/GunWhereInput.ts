import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type GunWhereInput = {
  id?: StringFilter;
  message?: StringNullableFilter;
  name?: StringNullableFilter;
};
