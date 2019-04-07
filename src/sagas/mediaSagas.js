import { put, call } from 'redux-saga/effects';
import { fetchChildrenGroup, checkInChild, checkOutChild } from '../Api/api';
import * as types from '../constants/actionTypes';


export function* searchMediaSaga({ payload }) {
  try {
    const children = yield call(fetchChildrenGroup, payload);
    yield [
      put({ type: types.FETCH_CHILDREN_SUCCESS, children }),
      put({ type: types.SELECTED_CHILD, child: children[0] }),
      put({ type: types.CHECKOUT_CHILD, child: children[0] })
    ];
  } catch (error) {
    yield put({ type: 'SEARCH_CHILD_FAILURE', error });
  }
}

export function* checkInChildSaga({ payload }) {
  try {
    const children = yield call(checkInChild, payload);
    yield [
      put({ type: types.CHECKIN_CHILD, child: children[0] })
    ];
  } catch (error) {
    yield put({ type: 'SEARCH_CHILD_FAILURE', error });
  }
}

export function* checkOutChildSaga({ payload }) {
  try {
    const children = yield call(checkOutChild, payload);
    yield [
      put({ type: types.CHECKOUT_CHILD, child: children[0] })
    ];
  } catch (error) {
    yield put({ type: 'SEARCH_CHILD_FAILURE', error });
  }
}