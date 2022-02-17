import React from 'react'
import './post.css'
import {MoreVert} from '@material-ui/icons'
export default function post() {
    return (
        <div className='post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src="/assets/person/1.jpeg" alt="" className="postProfileImg" />
                        <span className="postUsername">Cao Dũng</span>
                        <span className="postDate">5 mins ago</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert></MoreVert>
                    </div>   
                </div>
            </div>    
            <div className="postCent">
                <span className="postText">Hey! Its  my first post</span>
            
            </div>
            <div className="postRight"></div>
        </div>
  )
}
