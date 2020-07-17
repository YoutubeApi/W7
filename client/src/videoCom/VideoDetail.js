import React from "react";
import axios from 'axios';
// import cors from 'cors';


const VideoDetail = ({ video }) => {
  

  if (!video) {
    return <div>
       <h4>Enter search keyword to load...</h4>
       <br></br>
        </div>;
  }
    var  obj ={
    linkVideo:`https://www.youtube.com/embed/${video.id.videoId}`,
    titleVedio :video.snippet.title,
    descriptionVideo :video.snippet.description,
    photoUrl :video.snippet.thumbnails.medium.url,
    date :new Date()
    
  }
  //save
  function xadd (e){
    axios
    .post('http://localhost:5000/me' ,obj)
    .then(()=>{
    console.log("done")
  })
  .catch((err)=>{
    console.log(err)
  })
}
  
    console.log(obj)
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  // console.log(videoSrc);
  // console.log(video.snippet.thumbnails.medium.url)
  // console.log(video.snippet.description);
  // console.log(video.snippet.title)
  return (
    <div>
      <div className="ui embed">
        <iframe src={videoSrc} allowFullScreen title="Video player" />
      </div>
      <div className="ui segment">
        <p>{video.snippet.description}</p>        
        <button onClick ={xadd.bind()}>Add To  Your Favorite list  </button>
      </div>
    </div>
  );
};

export default VideoDetail;
