import { Route, Routes } from "react-router-dom";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar/Navbar";
import SearchFeed from "./components/Navbar/SearchFeed";
import VideoDetail from "./components/VideoDetail";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Feed />}/>
        <Route path='video/:id' element={<VideoDetail />} />
        <Route path='search/:searchInput' element={<SearchFeed />} />
      </Routes>
      
    </div>
  );
}

export default App;
