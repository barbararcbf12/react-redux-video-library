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
    const styleSelectedVideo = (
      videos.length !== 0 ? 'block' : 'none'
    )

    return(
      <div className="col-md-12">

        <div className="select-video" style={{display: styleSelectedVideo}}> 
          {selectedVideo && (<div id={selectedVideo.id}>
            <div className="title">{selectedVideo.title}</div>
            <div className='react-player'>
              <ReactPlayer url={selectedVideo.mediaUrl} playing controls light={selectedVideo.thumbUrl} width='100%' height='400px' /> 
            </div>
            <div className="label">{selectedVideo.description}</div>
          </div>)}
        </div>
        
      <div className="div-col" >
        <div className="col-md-4">
        <h3>Introduction ({introduction.length})</h3>
          { introduction.length !== 0 ? 
            introduction.map(video => ( 
              <div key={video.id + 'introduction'} onClick={onHandleSelectVideo.bind(this, video)} className="image-thumbnail">
                <div className="wrapper_thumbnail">
                  <img src={video.thumbUrl} alt={video.title} />
                  <h4>{video.title}</h4>
                  <h6>Running time: {video.runningTime}</h6>
                </div>
              </div>
            )): "There are no items in this category matching your requirements."
          }
        </div>

        <div className="col-md-4">
        <h3>Tips ({tips.length})</h3>
          { tips.length !== 0 ? 
            tips.map(video => ( 
              <div key={video.id + 'tips'} onClick={onHandleSelectVideo.bind(this, video)} className="image-thumbnail">
                <div className="wrapper_thumbnail">
                  <img src={video.thumbUrl} alt={video.title} />
                  <h4>{video.title}</h4>
                  <h6>Running time: {video.runningTime}</h6>
                </div>
              </div>
            )) : "There are no items in this category matching your requirements."
          }
        </div>

        <div className="col-md-4">
        <h3>Common skin reactions ({skinReactions.length})</h3>
          { skinReactions.length !== 0 ? 
            skinReactions.map(video => ( 
              <div key={video.id + 'skin'} onClick={onHandleSelectVideo.bind(this, video)} className="image-thumbnail">
                <div className="wrapper_thumbnail">
                  <img src={video.thumbUrl} alt={video.title} />
                  <h4>{video.title}</h4>
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
