import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-2 m-2 w-72 shadow-lg ">
      <img className="rounded-lg" src={thumbnails?.medium.url} alt="" />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics?.viewCount}</li>
      </ul>
    </div>
  );
};

// higher order components example
// it take exsiting video components modifes something retrurn that component

export const ModifyVideoCard = ({ info }) => {
  return (
    <div className="border border-red-600 rounded h-full hover:cursor-pointer hover:bg-gray-200 hover:border-none">
      <VideoCard info={info} />
    </div>
  );
};
export default VideoCard;
