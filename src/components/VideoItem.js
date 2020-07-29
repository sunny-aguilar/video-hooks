import React from "react";
import "./VideoItem.css";

// props.videos.snippet.channelTitle
const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} id="" className="video-item item">
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div className="content">
        <div className="header">{video.snippet.channelTitle}</div>
        <div className="description">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
