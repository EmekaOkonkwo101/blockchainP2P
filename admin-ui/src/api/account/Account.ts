import { User } from "../user/User";

export type Account = {
  amount: number | null;
  balance: number | null;
  createdAt: Date;
  id: string;
  updatedAt: Date;
  user?: User | null;
};
