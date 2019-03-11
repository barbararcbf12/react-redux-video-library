/**
 * Created by rowland on 8/15/16.
 */
import expect from 'expect';
import React from 'react';
import { mount } from 'enzyme';
import VideoPage from '../src/components/VideosPage';

describe('Test for Video Page component', () => {
  const setUp = () => {
    const props = {
      videos: [{ id: 1, test: 'test video' }],
      onHandleSelectVideo: expect.createSpy(),
      selectedVideo: { id: 1, test: 'test video' }
    };
    const Wrapper = mount(<VideoPage {...props} />);
    return { Wrapper };
  };
  const { Wrapper } = setUp();

  it('should assert that Component exist', () => {
    expect(Wrapper).toExist();
  });
  it('should have render  props', () => {
    expect(Wrapper.props().videos).toEqual([{ id: 1, test: 'test video' }]);
    expect(typeof Wrapper.props().onHandleSelectVideo).toEqual('function');
    expect(Wrapper.props().selectedVideo).toEqual({ id: 1, test: 'test video' });
  });

  it('should render self', () => {
    expect(Wrapper.find('h3').text()).toEqual('Introduction');
    expect(Wrapper.find('ReactPlayer').length).toEqual(1);
    expect(Wrapper.find('div').hasClass('wrapper_thumbnail')).toBe(true);
  });
});
