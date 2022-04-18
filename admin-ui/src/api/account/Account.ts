import { User } from "../user/User";

export type Account = {
  amount: number | null;
  balance: number | null;
  createdAt: Date;
  id: string;
  transaction: string | null;
  updatedAt: Date;
  user?: User | null;
};
