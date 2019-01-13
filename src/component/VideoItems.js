import React from 'react';
class VideoItems extends React.Component
{

// to call onSelectVideo with video arguments we have to use arrow function like this line no 10
//we have to call the function with props name
  render(){
      return(
         <div className="ui segment" onClick={()=>this.props.onVideoSelect(this.props.video)}>
          <img alt={this.props.desc} 
              src={this.props.src}/>
           <h4>{this.props.title}</h4>
         </div>
      );
  }
}
export default VideoItems;