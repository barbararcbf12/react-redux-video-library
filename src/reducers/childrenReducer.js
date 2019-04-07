import initialState from './initialState';
import * as types from '../constants/actionTypes';

export default function (state = initialState.children, action) {
  switch (action.type) {
    case types.FETCH_CHILDREN_SUCCESS:
      return [...state, action.children];
    case types.SELECTED_CHILD:
      return { ...state, selectedChild: action.child };
    case types.CHECKIN_CHILD:
      return { ...state, selectedChild: action.child }; //, checkedIn: true, pickupTime: action.child };
    case types.CHECKOUT_CHILD:
      return { ...state, selectedChild: action.child } //, checkedIn: false, pickupTime: null };
    default:
      return state;
  }
}

