import { put, call } from 'redux-saga/effects';
import { leoLabVideos } from '../Api/api';
import * as types from '../constants/actionTypes';


export default function* searchMediaSaga({ payload }) {
  try {
    const videos = yield call(leoLabVideos, payload);
    yield [
      put({ type: types.SHUTTER_VIDEOS_SUCCESS, videos }),
      put({ type: types.SELECTED_VIDEO, video: videos[0] })
    ];
  } catch (error) {
    yield put({ type: 'SEARCH_MEDIA_FAILURE', error });
  }
}
