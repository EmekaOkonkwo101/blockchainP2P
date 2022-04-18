import { AccountCreateNestedManyWithoutUsersInput } from "./AccountCreateNestedManyWithoutUsersInput";
import { GunCreateNestedManyWithoutUsersInput } from "./GunCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  accounts?: AccountCreateNestedManyWithoutUsersInput;
  firstName?: string | null;
  guns?: GunCreateNestedManyWithoutUsersInput;
  lastName?: string | null;
  password: string;
  phoneNumber?: number | null;
  roles: Array<string>;
  username: string;
};
