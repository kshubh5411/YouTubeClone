import React from 'react';
import SearchBar from './SearchBar';
import youtubeapi from '../API/youtubeapi';
import Videolist from './Videolist';
import VideoDetails from './VideoDetails';
class App extends React.Component
{
    state={videos:[],selectedVideo:null};
    onSearchSubmit= async term =>
    {
      const response= await youtubeapi.get("/search",
       {
           params:
           {
               q:term,
               part:'snippet',
               maxResults:10
           }
        }
       );
       //first element to be appear====
      this.setState({videos:response.data.items,
        selectedVideo:response.data.items[0]}
              );
       //  console.log(response.data.items);
    }
    onVideoSelect=(item)=>
    {
       this.setState({selectedVideo:item})
       console.log(this.state.selectedVideo);
    }
    //default search item=====
    componentDidMount()
    {
        this.onSearchSubmit('jai shree Radhe');
    }
    
    render()
    {
        return (
        <div className="ui container">
            <SearchBar onSearchSubmit={this.onSearchSubmit}/>
            <div className="ui grid">
               <div className="ui row">
                <div className="eleven wide column">
                <VideoDetails selectedVideo={this.state.selectedVideo} />
                </div>
                <div className="five wide column">
                <Videolist videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
                </div>
              </div>
            </div>
        </div>
        );
    }
}
export default App;
