import React from 'react'
import './rightbar.css'
import {Users} from '../../dumyData'
import Online from '../online/Online'
export default function rightbar({profile}) {
  
  const HomeRightbar = () => {
    return(
      <>
        <div className="birthdayContainer">
          <img src="\assets\gift.png" alt="" className="bithdayImg" />
          <span className="birthdayText">
          <b>Pola Foster</b> and<b> 3 other friends </b>hav a birthday today
          </span>
        </div>
        <img src="\assets\ad.png" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
      
    )
  }
  
  const ProfileRightbar = () => {
    return (
      <>
      <h4 className="rightbarTitle">User information</h4>
      <div className="rightbarInfo">
        <div className="rightbarinfoItem">
          <span className="rightbarInfoKey">City:</span>
          <div className="rightbarInfoValue">Tp Hồ Chí Minh</div>
        </div>
        <div className="rightbarinfoItem">
          <span className="rightbarInfoKey">From:</span>
          <div className="rightbarInfoValue">Bình Chánh</div>
        </div>
        <div className="rightbarinfoItem">
          <span className="rightbarInfoKey">Relationship:</span>
          <div className="rightbarInfoValue">Signle</div>
        </div>
      </div>
      
      <h4 className="rightbarTitle">User friends</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img src="/assets/person/7.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Dũng</span>
        </div>
        <div className="rightbarFollowing">
          <img src="/assets/person/7.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Dũng</span>
        </div>
        <div className="rightbarFollowing">
          <img src="/assets/person/7.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Dũng</span>
        </div>
        <div className="rightbarFollowing">
          <img src="/assets/person/7.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Dũng</span>
        </div>
      </div>
      </>
    )
  }
  
  return (
    <div className='rightbar'>
      <div className="rightWrapper">
        {profile ? <ProfileRightbar/> : <HomeRightbar/>}
      </div>  
    </div>
  )
}
