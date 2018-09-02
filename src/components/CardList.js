import React from 'react';
import Card from './Card';


const CardList = ({robots}) => {
  return (
    <div>
      {
        // map is used to loop through robots list
        robots.map((user, index)  => {
          // the key is used to save the index so that if the item were deleted, it would not have to refresh the whole DOM,
          // just that one element
          return (
            <Card
              key={index}
              id={robots[index].id}
              name={robots[index].name}
              email={robots[index].email}
            />
          );
        })
      }
    </div>
  );
}


export default CardList;
