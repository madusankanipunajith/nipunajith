import React from 'react';

const BadgeCard = ({url}) => {
    return (
        
        <img src={url} className='md:w-[300px] w-[90%]  border-2 border-[#33bbcf] mx-auto md:mb-0 my-2 object-contain' alt=''/>
    
    );
}

export default BadgeCard;
