import React, { useEffect, useState } from "react";
import { fetchApi } from "../utility/fetchApi";
import Sidebar from "./Sidebar";
import Videos from "./Videos";

const Feed = () => {
  const [selectCategory, setSelectCategory] = useState("coding");
  const [videos, setVideo] = useState([]);

  useEffect(() => {
    fetchApi(`search?part=snippet,id&q=${selectCategory}`).then((data) => setVideo(data.items));
  }, [selectCategory]);


  return (
    <div className="flex flex-col sm:flex-row">
      <div className="p-2 flex overflow-auto sm:basis-5/12">
        <Sidebar selectCategory={selectCategory} setSelectCategory={setSelectCategory} setVideos={setVideo} />
      </div>
      <div className="bg-white" >
        <Videos videos={videos}  />
      </div>
    </div>
  );
};

export default Feed;
