import { takeLatest } from 'redux-saga';
import { searchMediaSaga, checkInChildSaga, checkOutChildSaga } from './mediaSagas';
import * as types from '../constants/actionTypes';

export function* watchSearchMedia() {
  yield* takeLatest(types.SEARCH_CHILD_REQUEST, searchMediaSaga);
}

export function* watchChildCheckIn() {
  yield takeLatest(types.CHECKIN_CHILD, checkInChildSaga);
}

export function* watchChildCheckOut() {
  yield takeLatest(types.CHECKOUT_CHILD, checkOutChildSaga);
}