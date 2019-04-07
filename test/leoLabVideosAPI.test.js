import nock from 'nock';
import 'isomorphic-fetch';
import expect from 'expect';
import { leoLabVideos } from '../src/Api/api';

describe('Test for Api', () => {
  it('should call leoLabVideos Api', () => {
    leoLabVideos('sun').then((res) => {
      expect(res.length).toEqual(10);
    });
  });
});
