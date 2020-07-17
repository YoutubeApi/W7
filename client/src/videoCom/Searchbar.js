import React from 'react';
import '../style/searchbar.css';
import Display from './Display';
// import cors from 'cors';


class Searchbar extends React.Component {
    handleChange = (event) => {
        this.setState({
            term: event.target.value
        });
    
    };
    handleSubmit = event => {
        event.preventDefault();
        this.props.handleFormSubmit(this.state.term);
    }

    render() {
        
        return (
            <>
            <h2  style={{textAlign:"center"}}>Home</h2>
            <div id="divB">
            <button> Go To Your Favorite list</button>
            {/* <Display /> */}
           </div>
            <div className='search-bar ui segment'>
                <form onSubmit={this.handleSubmit} className='ui form'>
                    <div className='field'>
                        <label htmlFor="video-search">Video Search</label>
                        <input onChange={this.handleChange} name='video-search' type="text" placeholder="Search.."/>
                       
                    </div>
                </form>
            </div>
            </>
        )
    }
}
export default Searchbar;