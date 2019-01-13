
import React from 'react';
const VideoDetails=({selectedVideo})=>
{
    if(!selectedVideo)
     return <div>Loading....</div>
     const url=`https://www.youtube.com/embed/${selectedVideo.id.videoId}`;
     return(
         <div>
           <div className="ui embed">
                <iframe 
                allowfullscreen="allowfullscreen"
                mozallowfullscreen="mozallowfullscreen" 
                msallowfullscreen="msallowfullscreen" 
                oallowfullscreen="oallowfullscreen" 
                webkitallowfullscreen="webkitallowfullscreen"
                  title={selectedVideo.snippet.title}
                  src={url}>
                </iframe>
           </div>
              <div className="ui segment">
                <h4 className="ui header">{selectedVideo.snippet.title}</h4>
                <p>{selectedVideo.snippet.description}</p>
              </div>
         </div>
     );
}
export  default VideoDetails;  