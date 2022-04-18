import { Gun as TGun } from "../api/gun/Gun";

export const GUN_TITLE_FIELD = "name";

export const GunTitle = (record: TGun): string => {
  return record.name || record.id;
};
