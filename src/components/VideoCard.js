import React from 'react'

const VideoCard = ({info}) => {
    if(!info) return null;
    const {snippet,statistics} = info;
    const {channelTitle,title,thumbnails} = snippet;
  return (
    <div className='bg-white p-4  rounded-md w-full h-full flex flex-col'>
    <img src={thumbnails.medium.url} alt="thumbnail" className="w-full h-40 object-cover rounded-md mb-4"/>
    <div className="flex-grow">
        <h2 className="text-xl font-semibold mb-1">{title}</h2>
        <p className="text-gray-600 mb-1">{channelTitle}</p>
        <p className="text-gray-500">{statistics.viewCount} views</p>
    </div>
</div>

  )
}

export default VideoCard