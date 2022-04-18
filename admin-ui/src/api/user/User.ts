import { Account } from "../account/Account";

export type User = {
  accounts?: Array<Account>;
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  phoneNumber: number;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
