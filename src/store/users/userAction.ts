import { STORE_USER_ID } from './constants';

export const storeUser = (payload) => ({
  type: STORE_USER_ID,
  userId: payload,
});
