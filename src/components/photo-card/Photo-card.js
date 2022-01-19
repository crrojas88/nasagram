import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import moment from 'moment';
import './photo-card.css';

const PhotoCard = ({ image, title, description, date, username }) => {
    const newDate = moment(date).format("MMM Do YY")
    return(
        <div className='post'>
            <div className='post__header'>
                <Avatar className='post__avatar' alt={username} src="/static/images/avatar/1.jpg"/>
                <h3>{username}</h3>
            </div>
                <img className="post__image" src={image} alt={title}/>
            <div className='post__body'>
                <h4 className="post__text"><strong>{title}</strong></h4>
                <h4 className="date__text">{newDate}</h4>
                <p className='post__description'>{description}</p>
            </div>
        </div>
    )
}

export default PhotoCard