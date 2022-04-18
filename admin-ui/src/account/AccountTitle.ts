import { Account as TAccount } from "../api/account/Account";

export const ACCOUNT_TITLE_FIELD = "transaction";

export const AccountTitle = (record: TAccount): string => {
  return record.transaction || record.id;
};
