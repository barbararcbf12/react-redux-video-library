import * as types from '../constants/actionTypes';

export const selectChildAction = (child) => ({
  type: types.SELECTED_CHILD,
  child
});

export const searchChildAction = (payload) => ({
  type: types.SEARCH_CHILD_REQUEST,
  payload
});


export const checkChildInAction = (child) => ({
  type: types.CHECKIN_CHILD,
  child
});

export const checkChildOutAction = (child) => ({
  type: types.CHECKOUT_CHILD,
  child
});