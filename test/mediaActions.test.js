import expect from 'expect';
import {
  searchMediaAction,
  selectVideoAction
} from '../src/actions/mediaActions';
import * as types from '../src/constants/actionTypes';


describe('Test for Action creators', () => {

  it('should return selected video action object', () => {
    const video = { id: 1, link: 'https://video.skincoachapp.com/content/hls/es-001-welcome-to-skincoach-v9-1537879927395/es-001-welcome-to-skincoach-v9-master-playlist.m3u8' };
    expect(selectVideoAction(video)).toEqual({ type: types.SELECTED_VIDEO, video });
  });

  it('should return searchMediaAction action object', () => {
    const test = { id: 1, link: 'https://video.skincoachapp.com/content/thumbs/es-001-welcome.jpg' };
    expect(searchMediaAction(test)).toEqual({ type: types.SEARCH_MEDIA_REQUEST, payload: test });
  });
});
