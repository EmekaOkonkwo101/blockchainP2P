import { AccountCreateNestedManyWithoutUsersInput } from "./AccountCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  accounts?: AccountCreateNestedManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: Array<string>;
  username: string;
};
