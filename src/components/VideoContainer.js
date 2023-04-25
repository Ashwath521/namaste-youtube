import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constant";
import VideoCard, { ModifyVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
    const res = await fetch(YOUTUBE_VIDEO_API);
    const data = await res.json();
    setVideos(data.items);
  };
  return (
    <div className="flex flex-wrap justify-between">
      {videos[0] && <ModifyVideoCard info={videos[0]} />}
      {videos.map((videoItem) => (
        <Link to={"/watch?v=" + videoItem.id} key={videoItem.id}>
          <VideoCard info={videoItem} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
