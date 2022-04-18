import { AccountUpdateManyWithoutUsersInput } from "./AccountUpdateManyWithoutUsersInput";
import { GunUpdateManyWithoutUsersInput } from "./GunUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  accounts?: AccountUpdateManyWithoutUsersInput;
  firstName?: string | null;
  guns?: GunUpdateManyWithoutUsersInput;
  lastName?: string | null;
  password?: string;
  phoneNumber?: number | null;
  roles?: Array<string>;
  username?: string;
};
