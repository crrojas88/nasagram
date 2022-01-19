import React from 'react';
import PhotoCard from '../photo-card/Photo-card';
import './photo-list.css';

const Photolist = ({ photoInfo, active, setActive }) => {
    return(
    <main className='timeline'>     
        <PhotoCard setActive={setActive} active={active} image={photoInfo.url} title={photoInfo.title} description={photoInfo.explanation} date={photoInfo.date} username={photoInfo.copyright} />
    </main>
    )
}

export default Photolist