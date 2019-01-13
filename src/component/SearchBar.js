import React from 'react';

class SearchBar extends React.Component
{
    state={term:''};
    onFormSubmit=(event)=>
        {
            event.preventDefault();
            this.props.onSearchSubmit(this.state.term);
        }
    render()
    {
        return(
         
            <div className="ui segment" style={{top:5}}>
                <form className="ui form" onSubmit={this.onFormSubmit}>
                 <div className="field">
                    <label>Search Video</label>
                    <div className="ui icon input">
                        <input type="text" value={this.state.term} onChange={(e)=>this.setState({term:e.target.value})} />
                        <i className="search icon"></i>
                    </div>
                 </div>
                </form>
            </div>
        );
    }
}
export default SearchBar;
