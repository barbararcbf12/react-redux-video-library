import expect from 'expect';
import { put, call } from 'redux-saga/effects';
import searchMediaSaga from '../src/sagas/mediaSagas';
import { leoLabVideos } from '../src/Api/api';


describe('Test for searchMediaSaga', () => {
  const payload = 'test';
  const gen = searchMediaSaga({ payload });

  it('should call leoLabVideos API', () => {
    expect(gen.next(payload).value).toEqual(call(leoLabVideos, payload));
  });

  it('should yield array of objects', () => {
    const videos = [];
    expect(gen.next(videos).value.length).toEqual(16);
  });

  it('should dispatch failure effect', () => {
    const error = 'error';
    expect(gen.throw(error).value).toEqual(put({ type: 'SEARCH_MEDIA_FAILURE', error }));
  });
});
