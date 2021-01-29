import { useEffect, useState } from "react";
import sanityClient from "../client";
import getYouTubeId from "get-youtube-id";
import YouTube from "react-youtube";

export default function Video() {
  const [allPostsData, setAllPosts] = useState(null); // TODO: fiks any

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == 'video']{url}`)
      .then((data) => setAllPosts(data))
      .catch(console.error);
  }, []);

  return (
    <div>
      {allPostsData &&
        allPostsData.map(({ url, index }) => {
          console.log(url);
          return (
            <div>
              <YouTube videoId={getYouTubeId(url)} />
            </div>
          );
        })}
    </div>
  );
}
