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
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.state = { 
      textSubmittd: '',
      textNew: 'start'
    };
  }

  componentDidMount() {
    this.props.dispatch(searchMediaAction(''));
  }

  handleSelectVideo(selectedVideo) {
    if(this.props.videos !== 0){
      this.props.dispatch(selectVideoAction(selectedVideo));
    }
  }

  handleTextChange(event){
    event.preventDefault();
    this.setState({ textNew: this.query.value });
  }

  handleSearch(event) {
    event.preventDefault();
    this.setState({ textSubmitted: this.state.textNew });
    if (this.query !== null) {
      this.props.dispatch(searchMediaAction(this.query.value));
    }
  }

  handleKeyPress(target) {
    if(target.charCode===13){
      this.setState({ textSubmitted: this.state.textNew });
      if (this.query !== null) {
        this.props.dispatch(searchMediaAction(this.query.value));
      }    
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

    const { videos, selectedVideo } = this.props;

    const disabledButton = (
      <input
        type="submit"
        className="btn btn-sec"
        value="Search Library"
      />
    );

    return (
      <div className="container-fluid">
        { videos ? <div>
          <input
            type="text"
            className="search-field"
            ref={ref => (this.query = ref)}
            onChange={this.handleTextChange}
            onKeyPress={this.handleKeyPress}
          />
          { this.state.textNew === this.state.textSubmitted ?
            disabledButton
            : 
            <input
              type="submit"
              className="btn btn-primary"
              value="Search Library"
              onClick={this.handleSearch}
            />
          }

          <div>
            <h4>{ "Total of results: " + videos.length }</h4>
              <input
                  type="submit"
                  className="btn btn-primary"
                  style={{display: videos.length !== 16 ? 'inline-block' : 'none' }}
                  value="Clear Search"
                  onClick={this.handleClearSearch}
              />
          </div>

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
