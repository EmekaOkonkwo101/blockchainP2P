import { Account } from "../account/Account";
import { Gun } from "../gun/Gun";

export type User = {
  accounts?: Array<Account>;
  createdAt: Date;
  firstName: string | null;
  guns?: Array<Gun>;
  id: string;
  lastName: string | null;
  phoneNumber: number | null;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
