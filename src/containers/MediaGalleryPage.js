import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { searchMediaAction, selectVideoAction } from '../actions/mediaActions';
import VideosPage from '../components/VideosPage';
import '../styles/style.css';

export class MediaGalleryPage extends Component {
  constructor() {
    super();
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSelectVideo = this.handleSelectVideo.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(searchMediaAction(''));

    // let introduction = [];
    // let tips = [];
    // let skinReactions =[];
    // {this.props.videos.map(video => {
    //   if(video.active !== "false"){
    //     if(video.category === 'Introduction'){
    //       introduction.push(video);
    //       console.log(introduction.length);
    //     }
    //     if(video.category === 'Tips'){
    //       tips.push(video);
    //     }
    //     if(video.category === 'Common skin reactions'){
    //       skinReactions.push(video);
    //     }
    //   }
    //   })
    // }
  }

  handleSelectVideo(selectedVideo) {
    this.props.dispatch(selectVideoAction(selectedVideo));
  }

  handleSearch(event) {
    event.preventDefault();
    if (this.query !== null) {
      this.props.dispatch(searchMediaAction(this.query.value));
      this.query.value = '';
    }
  }

  render() {
    console.log(this.props.videos, 'Videos new');
    console.log(this.props.selectedVideo, 'SelectedVideo new');
    const { videos, selectedVideo } = this.props;

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
          <div className="row">
            <VideosPage
              videos={videos}
              // introduction={introduction}
              // tips={tips}
              // skinReactions={skinReactions}
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
  // introduction: PropTypes.array,
  // tips: PropTypes.array,
  // skinReactions: PropTypes.array,
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
