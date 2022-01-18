import React from 'react';
import PhotoCard from './Photo-card';

const Photolist = ({ photoInfo }) => {
    return(
        <div>
            <PhotoCard image={photoInfo.url} title={photoInfo.title} description={photoInfo.explanation} date={photoInfo.date} />
        </div>
    )
}

export default Photolist