import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { searchMediaAction, selectVideoAction } from '../actions/mediaActions';
import VideosPage from '../components/VideosPage';
import '../styles/style.css';

export class MediaGalleryPage extends Component {
  constructor() {
    super();
    this.handleSearch = this.handleSearch.bind(this);
    this.handleClearSearch = this.handleClearSearch.bind(this);
    this.handleSelectVideo = this.handleSelectVideo.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(searchMediaAction(''));
  }

  handleSelectVideo(selectedVideo) {
    // if(this.props.videos !== null){
      this.props.dispatch(selectVideoAction(selectedVideo));
    // }else{
    //   this.props.dispatch(selectVideoAction(''));
    // }
  }

  handleSearch(event) {
    event.preventDefault();
    if (this.query !== null) {
      this.props.dispatch(searchMediaAction(this.query.value));
    }
  }

  handleClearSearch(event) {
    event.preventDefault();
    if (this.query !== null) {
        this.props.dispatch(searchMediaAction(''));
        this.query.value = '';
    }
  }

  render() {
    // console.log(this.props.videos, 'Videos new');
    // console.log(this.props.selectedVideo, 'SelectedVideo new');
    const { videos, selectedVideo } = this.props;

    // const resultsNumber = ( videos.length );

    return (
      <div className="container-fluid">
        { videos ? <div>
          <input
            type="text"
            ref={ref => (this.query = ref)}
          />
          <input
            type="submit"
            className="btn btn-primary"
            value="Search Library"
            onClick={this.handleSearch}
          />
          <input
            type="submit"
            className="btn btn-primary"
            value="Clear Search"
            onClick={this.handleClearSearch}
          />
          <div>{ "Total of results: " + videos.length }</div>
          <div className="row">
            <VideosPage
              videos={videos}
              selectedVideo={selectedVideo}
              onHandleSelectVideo={this.handleSelectVideo}
            />
          </div>
        </div> : 'loading ....' }
      </div>
    );
  }
}

MediaGalleryPage.propTypes = {
  videos: PropTypes.array,
  selectedVideo: PropTypes.object,
  dispatch: PropTypes.func.isRequired
};

/* Subscribe component to redux store and merge the state into component\s props */
const mapStateToProps = ({ videos }) => ({
  videos: videos[0],
  selectedVideo: videos.selectedVideo
});

/* connect method from react-router connects the component with redux store */
export default connect(mapStateToProps)(MediaGalleryPage);
