import React from 'react';
import Button from './Button';

const ListItems = ["All","Gaming","Music","Dance","Live","Cricket","News","Cooking","blogs","baseball"]

const ButtonList = () => {
  return (
    <div className='flex'>
      {
        ListItems.map((item,index) =>
        (
          <Button key={index} name={item} />
        )
      )}
    </div>
  )
}

export default ButtonList