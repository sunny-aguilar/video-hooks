import { useState, useEffect } from "react";
import youtuve from "../apis/youtube";

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    onTermSubmit(defaultSearchTerm);
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
    console.log(response);
  };

  return [videos, search];
};

export default useVideos;