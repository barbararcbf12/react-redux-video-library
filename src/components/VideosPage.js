import React, { PropTypes } from 'react';
import ReactPlayer from 'react-player';

let introduction = [];
let tips = [];
let skinReactions =[];

// const VideosPage = ({ videos, introduction, tips, skinReactions, onHandleSelectVideo, selectedVideo }) => (
const VideosPage = ({ videos, onHandleSelectVideo, selectedVideo }) => (
  <div className="col-md-12">
    {/* {console.log(videos)} */}
    { videos.map(video => {
        if(video.active !== "false"){
          if(video.category === 'Introduction'){
            introduction.push(video);
            console.log(introduction.length);
            // return introduction;
          }
          if(video.category === 'Tips'){
            tips.push(video);
            // return tips;
          }
          if(video.category === 'Common skin reactions'){
            skinReactions.push(video);
            // return skinReactions;
          }
        }
      })
    }

    <div className="select-video">
      <div id={selectedVideo.id}>
        <h4 className="title">{selectedVideo.title}</h4>
        <h6 className="title">{selectedVideo.description}</h6>
        <div className='react-player'>
          <ReactPlayer url={selectedVideo.mediaUrl} playing controls light={selectedVideo.thumbUrl} width='100%' height='450px' /> 
        </div>
      </div>
    </div>
    <div className="div-col" >
      <div className="video-thumbnail" className="col-md-4">
      <h3>Introduction</h3>
        {introduction.length !== 0 ? introduction.map(video => ( //console.log("introduction", introduction.length)
          <div key={video.id + 'intro'} onClick={onHandleSelectVideo.bind(this, video)} className="image-thumbnail">
            <div className="wrapper_thumbnail">
              <img src={video.thumbUrl} alt={video.title} />
              <h5>{video.title}</h5>
              <h6>Running time: {video.runningTime}</h6>
            </div>
          </div>
        )): "No items in this cathegory."}
      </div>

      <div className="video-thumbnail" className="col-md-4">
      <h3>Tips</h3>
        {tips.length !== 0 ? tips.map(video => ( //console.log("tips", tips.length)
          <div key={video.id + 'tips'} onClick={onHandleSelectVideo.bind(this, video)} className="image-thumbnail">
            <div className="wrapper_thumbnail">
              <img src={video.thumbUrl} alt={video.title} />
              <h5>{video.title}</h5>
              <h6>Running time: {video.runningTime}</h6>
            </div>
          </div>
        )): "No items in this cathegory."}
      </div>

      <div className="video-thumbnail" className="col-md-4">
      <h3>Common skin reactions</h3>
        {skinReactions.length !== 0 ? skinReactions.map(video => ( //console.log("skin_conditions", video)
          <div key={video.id + 'skin'} onClick={onHandleSelectVideo.bind(this, video)} className="image-thumbnail">
            <div className="wrapper_thumbnail">
              <img src={video.thumbUrl} alt={video.title} />
              <h5>{video.title}</h5>
              <h6>Running time: {video.runningTime}</h6>
            </div>
          </div>
        )): "No items in this cathegory."}
      </div>
    </div>
    <br /><br />
  </div>
);

VideosPage.propTypes = {
  videos: PropTypes.array,
  selectedVideo: PropTypes.object,
  onHandleSelectVideo: PropTypes.func.isRequired
};

export default VideosPage;
