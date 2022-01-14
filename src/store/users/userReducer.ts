import { Reducer, Action } from 'redux';
import { STORE_USER_ID, UserActionType } from './constants';
import { UserStoreInterface } from './userStoreInterface';

const initialState: UserStoreInterface = { userId: null }

export const userReducer: Reducer<UserStoreInterface, Action> = (state = initialState, action: UserActionType) => {
  switch (action.type) {
    case STORE_USER_ID:
      return {
        ...state,
        userId: action.userId,
      };
    default:
      return state;
  }
}
