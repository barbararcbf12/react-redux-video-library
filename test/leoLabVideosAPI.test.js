import nock from 'nock';
import 'isomorphic-fetch';
import expect from 'expect';
import { fetchChildrenGroup } from '../src/Api/api';

describe('Test for Api', () => {
  it('should call fetchChildrenGroup Api', () => {
    fetchChildrenGroup('sun').then((res) => {
      expect(res.length).toEqual(1);
    });
  });
});
