import React from "react";

const VideoComments = ({ koment }) => {
  //   const { snippet } = koment;
  // console.log(snippet)
  console.log(koment.snippet.topLevelComment.snippet);

  return (
    <>
      <div className="p-6">
        <h1 className="text-2xl font-medium text-blue-400">{koment.snippet.topLevelComment.snippet.authorDisplayName}</h1>
        <p className="text-xl">{koment.snippet.topLevelComment.snippet.textOriginal}</p>
        <span className="text-[12px]">{koment.snippet.topLevelComment.snippet.publishedAt}</span>
        <hr />
      </div>
    </>
  );
};

export default VideoComments;
