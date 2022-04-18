import { AccountListRelationFilter } from "../account/AccountListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { GunListRelationFilter } from "../gun/GunListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type UserWhereInput = {
  accounts?: AccountListRelationFilter;
  firstName?: StringNullableFilter;
  guns?: GunListRelationFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  phoneNumber?: IntNullableFilter;
  username?: StringFilter;
};
