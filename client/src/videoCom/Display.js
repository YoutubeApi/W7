
import React, { Component } from 'react'
import axios from 'axios';
import Searchlist from './Searchlist'
export class Display extends Component {
    state ={
        videos:[]
    };
    // componentDidMount() {
    //     axios.get('https://localhost:5000/deletone')
    //       .then(res => this.setState({ videos: res.data }));
    //   }
    


    handleSubmit(e){
        axios.get("http://localhost:5000/display")
        .then((result)=>{
            console.log(result);
            const finalData = result.data;
            this.setState({videos:finalData});
            console.log(finalData);
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    render() {   
              return(
            <div>
           {/* <Searchlist /> */}
           <button onClick ={this.handleSubmit.bind(this)}>Show List</button>
           {this.state.videos.map((item,index)=>{
               return (
              <div key={index}>                  
                   <div>{item.linkVideo}</div>
                   <div>{item.titleVedio}</div>
                   <div>{item.descriptionVideo}</div>
                   <div>{item.photoUrl}</div>
                   <div>{item.date}</div>
                   <button onClick = {()=>{
                 axios.delete("http://localhost:5000/removeOne")
                .then((res) => {
                  console.log("DELETED");
                })
                .catch((err) => {
                  console.log(err);
                });
             }}> Delete </button>

                   <button>Edit</button>
                   </div>
               )
           })}


</div>
        )
    }
}

export default Display
