import React from 'react';
import video from './assets/gif.mp4'

export const Video = () => {

    return (
        <video autoplay='true' muted controls loop>
          <source src={video} type="video/mp4"/>
        </video>
    )
}