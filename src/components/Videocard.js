import React from "react";
import { Link } from "react-router-dom";

const Videocard = ({ video }) => {
  const { id, snippet } = video;
  // console.log(video);
  return (
    <div className="flex items-center justify-center p-4">
      <Link to={`/video/${id.videoId}`}>
        <img src={snippet.thumbnails.high.url} alt={snippet.thumbnails.title} className="rounded-md " />
        <h1 className="font-medium">{snippet.title}</h1>
        <span>{snippet.channelTitle}</span>
      </Link>
    </div>
  );
};

export default Videocard;
