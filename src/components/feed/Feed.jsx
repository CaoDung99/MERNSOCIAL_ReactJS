import React from 'react'
import './feed.css'
import Share from './../share/Share';
import Post from '../post/Post';
export default function feed() {
  return (
    <div className='feed'> 
        <div className="feedWrapper">
            <Share></Share>
            <Post></Post>
        </div>
    </div>
  )
}
