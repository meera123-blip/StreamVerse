import React from 'react';
import logo from './img/logo.png';
import menu from './img/menu.png';
import user from './img/user-icon.png';
import { toggleMenu } from '../utils/appSlice';
import { useDispatch } from 'react-redux';

const Head = () => {

    const dispatch = useDispatch();

    const toggleMenuHandler = () =>
    {
       dispatch(toggleMenu());
    }

  return (
    <div className="flex items-center justify-between p-4 bg-white md:px-8">
    <div className="flex items-center space-x-4">
        <img className="h-8 cursor-pointer" alt="menu" src={menu} onClick={() => toggleMenuHandler()}/>
        <img className="h-8" alt="logo" src={logo} />
    </div>
   <div className='center'>
     <input className=' w-96 border border-gray-400 p-2 rounded-l-full' type="text" placeholder='search'/>
     <button className='border border-gray-400 p-2 rounded-r-full bg-gray-100'>🔍</button>
   </div>
    <div>
        <img className="h-8" src={user} alt="user" />
    </div>
</div>


  )
}

export default Head