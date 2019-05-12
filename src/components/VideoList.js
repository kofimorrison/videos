import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  //props contain videos from App component as (props.videos)
  //videos can be destructured out of props using ({videos})
  const renderedList = videos.map(video => {
    return (
      <VideoItem
        onVideoSelect={onVideoSelect}
        video={video}
        key={video.id.videoId}
      />
    );
  });
  return <div className="ui relaxed divided list">{renderedList}</div>;
};
export default VideoList;
