import React from 'react';
import VideoItems from './VideoItems';
class Videolist extends React.Component
{
    render()
    {
       const videos=this.props.videos.map(video=>
        {
            
            return(
               <VideoItems key={video.id.videoId} 
               video={video}//taken all parts of video although not necessary===
               desc={video.snippet.description} 
               title={video.snippet.title} 
               src={video.snippet.thumbnails.default.url}
               onVideoSelect={this.props.onVideoSelect}
               />
            );
        });
        return <div className="video-list">{videos}</div>
    }
}
export default Videolist;