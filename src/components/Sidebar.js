import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {

    const isMenuOpen = useSelector(store => store.app.isMenuOpen);

    if(!isMenuOpen) return null;
  return (
   
    <div className="bg-gray-100 text-black p-4 h-auto w-72">
            <div className="mb-8">
                <ul className="text-lg font-semibold ">
                   <Link to="/"><li className="my-2">Home</li></Link>
                    <li className="my-2">Shorts</li>
                    <li className="my-2">Subscriptions</li>
                </ul>
            </div>
            <div className="mb-8 ">
                <ul className="text-lg font-semibold">
                    <li className="my-2">Library</li>
                    <li className="my-2">History</li>
                    <li className="my-2">Your Videos</li>
                    <li className="my-2">Watch Later</li>
                    <li className="my-2">Liked Videos</li>
                </ul>
            </div>
            <div className=''>
                <h2 className="text-xl font-semibold mb-2 ">Explore</h2>
                <ul className=" font-semibold text-gray-600 text-base">
                    <li className="my-2">Trending</li>
                    <li className="my-2">Shopping</li>
                    <li className="my-2">Music</li>
                    <li className="my-2">Movies</li>
                    <li className="my-2">Gaming</li>
                    <li className="my-2">News</li>
                    <li className="my-2">Sports</li>
                    <li className="my-2">Learning</li>
                </ul>
            </div>
        </div>
  )
}

export default Sidebar