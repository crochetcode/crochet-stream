import React from 'react';
import video from './assets/gif.mp4'

export const Video = props => {

    return (
        <video autoplay='true' muted controls loop className={props.flip ? 'flip' : ''}>
          <source src={video} type="video/mp4"/>
        </video>
    )
}