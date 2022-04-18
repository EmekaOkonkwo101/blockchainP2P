import { SortOrder } from "../../util/SortOrder";

export type AccountOrderByInput = {
  amount?: SortOrder;
  balance?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
