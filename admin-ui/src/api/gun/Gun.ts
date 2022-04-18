import { User } from "../user/User";

export type Gun = {
  createdAt: Date;
  id: string;
  message?: User | null;
  name: string | null;
  updatedAt: Date;
};
