import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

// YouTube API Key:
const KEY = "AIzaSyDCIBaO57Z3538VcxlmNRGEvY0K2JA8FV0";

const App = () => {
  
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    onTermSubmit("scooters");
  }, []);

  // callback for SearchBar
  const onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
        key: KEY,
        part: "snippet",
        maxResults: 5,
        type: "video",
      },
    });

    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);

    console.log(response);
  };

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={onTermSubmit} />
      {/* prop can be called the same name as function */}
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList
              onVideoSelect={setSelectedVideo}
              videos={videos}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
