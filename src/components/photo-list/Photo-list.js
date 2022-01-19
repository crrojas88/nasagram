import React from 'react';
import PhotoCard from '../photo-card/Photo-card';
import './photo-list.css';

const Photolist = ({ photoInfo }) => {
    return(
    <div className='timeline'>     
        <PhotoCard image={photoInfo.url} title={photoInfo.title} description={photoInfo.explanation} date={photoInfo.date} username={photoInfo.copyright} />
    </div>
    )
}

export default Photolist