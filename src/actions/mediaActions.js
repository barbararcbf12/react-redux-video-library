import * as types from '../constants/actionTypes';

export const selectVideoAction = (video) => ({
  type: types.SELECTED_VIDEO,
  video
});

export const searchMediaAction = (payload) => ({
  type: types.SEARCH_MEDIA_REQUEST,
  payload
});
