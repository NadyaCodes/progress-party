import React from 'react'
import ReactPlayer from "react-player"

export default function Party() {
  return (
    <div className="party-container">
      <div className="emoji-container">
        <img src='../face-emojji-1.png' className='emoji emoji-1'></img>
        <img src='../face-emojji-1.png' className='emoji emoji-2'></img>
        <img src='../face-emojji-1.png' className='emoji emoji-3'></img>
        {/* <img src='../face-emojji-1.png' className='emoji emoji-4'></img> */}
      </div>
      {/* <ReactPlayer 
        // width="640px" 
        // height="360px" 
        url="https://www.youtube.com/watch?v=Wjt6yyNDWmc"
        muted={false}
        playing="true"
        /> */}
    </div>
  )
}