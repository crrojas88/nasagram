import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Heart from 'react-heart';
import moment from 'moment';
import './photo-card.css';

const PhotoCard = ({ image, title, description, date, username, active, setActive }) => {
    const newDate = moment(date).format("MMM Do YY")
    return(
        <div className='post'>
            <div className='post__header'>
                <Avatar className='post__avatar' alt={username} src="/static/images/avatar/1.jpg"/>
                <h1>{username}</h1>
            </div>
                <img className="post__image" src={image} alt={title}/>
            <div className='post__body'>
                <Heart isActive={active} onClick={() => {setActive(!active)}} className='post__heart'/>
                <h2 className="post__text"><strong>{title}</strong></h2>
                <p className='post__description'>{description}</p>
                <p className="date__text">{newDate}</p>
            </div>
        </div>
    )
}

export default PhotoCard