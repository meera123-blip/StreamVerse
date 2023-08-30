import React, { useEffect, useState } from 'react';
import { YOTUBE_VIDEOS_API } from '../utils/constant';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
const VideoContainer = () => {

  const [videos, setVideos] = useState([]);

useEffect(()=>
{
getVideos();

},[]);

const getVideos = async () =>
{
  const data = await fetch(YOTUBE_VIDEOS_API);
  const json = await data.json();
  setVideos(json?.items);
}



  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
    {videos.map((video) => (
       <Link to={"/watch?v="+video.id}  key={video.id}> <VideoCard info={video} /></Link>
    ))}
</div>

  )
}

export default VideoContainer;