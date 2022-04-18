import { AccountUpdateManyWithoutUsersInput } from "./AccountUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  accounts?: AccountUpdateManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  phoneNumber?: number;
  roles?: Array<string>;
  username?: string;
};
