import React from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';

const VideosPage = ({ videos, onHandleSelectVideo, selectedVideo }) => {
    const introduction = ( 
      videos.filter(v => v.category === 'Introduction')
    );
    const tips = ( 
      videos.filter(v => v.category === 'Tips')
    );
    const skinReactions = ( 
      videos.filter(v => v.category === 'Common skin reactions')
    );
    {console.log("videos", videos)}
    {console.log("introduction", introduction.length)};
    {console.log("introduction", tips.length)};
    {console.log("introduction", skinReactions.length)};
      
    return(
    <div className="col-md-12">
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
        { introduction.length !== 0 ? 
          introduction.map(video => ( //console.log("tips", tips.length)
            <div key={video.id + 'introduction'} onClick={onHandleSelectVideo.bind(this, video)} className="image-thumbnail">
              <div className="wrapper_thumbnail">
                <img src={video.thumbUrl} alt={video.title} />
                <h5>{video.title}</h5>
                <h6>Running time: {video.runningTime}</h6>
              </div>
            </div>
          )): "There are no items in this category matching your requirements."
        }
      </div>

      <div className="video-thumbnail" className="col-md-4">
      <h3>Tips</h3>
        { tips.length !== 0 ? 
          tips.map(video => ( 
            <div key={video.id + 'tips'} onClick={onHandleSelectVideo.bind(this, video)} className="image-thumbnail">
              <div className="wrapper_thumbnail">
                <img src={video.thumbUrl} alt={video.title} />
                <h5>{video.title}</h5>
                <h6>Running time: {video.runningTime}</h6>
              </div>
            </div>
          )) : "There are no items in this category matching your requirements."
        }
      </div>

      <div className="video-thumbnail" className="col-md-4">
      <h3>Common skin reactions</h3>
        { skinReactions.length !== 0 ? 
          skinReactions.map(video => ( //console.log("skin_conditions", video)
            <div key={video.id + 'skin'} onClick={onHandleSelectVideo.bind(this, video)} className="image-thumbnail">
              <div className="wrapper_thumbnail">
                <img src={video.thumbUrl} alt={video.title} />
                <h5>{video.title}</h5>
                <h6>Running time: {video.runningTime}</h6>
              </div>
            </div>
          )) : "There are no items in this category matching your requirements."
        }
      </div>
    </div>
    <br /><br />
  </div>
)
}


VideosPage.propTypes = {
  videos: PropTypes.array,
  selectedVideo: PropTypes.object,
  onHandleSelectVideo: PropTypes.func.isRequired
};

export default VideosPage;

// const segmentByType = (array, type, onHandleSelectVideo) => {
    //   console.log("array", array);
    //   if(array.length !== 0){
    //     array.map(video => {
    //       if(video.active !== "false"){
    //         if(video.category === type){
    //           console.log("entrei!");
    //           return( 
    //             <div key={video.title + video.id } onClick={onHandleSelectVideo.bind(this, video)} className="image-thumbnail">
    //             <div className="wrapper_thumbnail">
    //               <img src={video.thumbUrl} alt={video.title} />
    //               <h5>{video.title}</h5>
    //               <h6>Running time: {video.runningTime}</h6>
    //             </div>
    //           </div> 
    //           )
    //         }else {
    //           return "There are no items in this cathegory."
    //         }
    //       }else {
    //         return "There are no active items in this library."
    //       }
    //     })
    //   }else {
    //     return "There are no items in this library."
    //   }
    // }
