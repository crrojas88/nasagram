import React from 'react';

const PhotoCard = ({ image, title, description, date }) => {
    return(
        <div>
            <img src={image} alt={title}/>
            <h3>{title}</h3>
            <p>{date}</p>
            <p>{description}</p>
        </div>
    )
}

export default PhotoCard