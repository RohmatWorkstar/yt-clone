import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { fetchApi } from "../utility/fetchApi";
import Videocard from "./Videocard";
import VideoComments from "./VideoComments";

const VideoDetail = () => {
  const { id } = useParams();
  const [VideoDetail, setVideoDetail] = useState();
  const [VideoSuggest, setVideoSuggest] = useState();
  const [VideoComment, setVideoComment] = useState();
  useEffect(() => {
    fetchApi(`videos?part=contentDetails,snippet,statistics&id=${id}`).then((data) => setVideoDetail(data.items[0]));

    fetchApi(`search?relatedToVideoId=${id}&part=id,snippet&type=video`).then((data) => setVideoSuggest(data.items));
    fetchApi(`commentThreads?part=snippet&videoId=${id}&maxResults= 10`).then((data) => setVideoComment(data.items));
  }, [id]);

  // console.log(VideoDetail);
  // console.log(VideoSuggest)
  // console.log(VideoComment);

  return (
    <div className="flex flex-col md:flex-row">
      <div className=" grow md:basis-9/12 p-5">
        <ReactPlayer width={"auto"}  url={`https://www.youtube.com/watch?v=${id}`} />
        <h1 className="text-2xl font-medium">{VideoDetail?.snippet.title}</h1>
        <div className="flex flex-row gap-5 my-2 text-gray-500">
          <h2>{VideoDetail?.statistics.viewCount} views</h2>
          <h2>{VideoDetail?.statistics.likeCount} likes</h2>
          <h2>{VideoDetail?.statistics.commentCount} likes</h2>
        </div>
        <hr />
        <p className="">{VideoDetail?.snippet.description}</p>
        <hr />
        <div>
          <h1 className="font-medium text-2xl mt-8 text-red-500">Comment :</h1>
          {VideoComment?.map((koment, i) => {
            return (
              <>
                <VideoComments koment={koment} key={i} />
              </>
            );
          })}
        </div>
      </div>
      <div className="md:basis-3/12">
        {VideoSuggest?.map((video, i) => {
          return <Videocard video={video} key={i} />;
        })}
      </div>
    </div>
  );
};

export default VideoDetail;
