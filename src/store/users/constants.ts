import { UserStoreInterface } from "./userStoreInterface";

export const STORE_USER_ID = 'STORE_USER_ID';

interface StoreUserId {
  type: typeof STORE_USER_ID;
  userId: UserStoreInterface,
}

export type UserActionType = StoreUserId;
