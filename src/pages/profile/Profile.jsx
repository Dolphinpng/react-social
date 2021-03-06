import "./profile.css";
import Sidebar from "../../component/sidebar/Sidebar"
import Topbar from "../../component/topbar/Topbar"
import Feed from "../../component/feed/Feed"
import Rightbar from "../../component/rightbar/Rightbar"




const Profile = () => {
  return (
      <>
      <Topbar/>
      <div className="profile">
        <Sidebar/>
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
            <img
                className="profileCoverImg"
                src="assets/post/3.jpeg"
                alt=""
              />
              <img
                className="profileUserImg"
                src="assets/person/7.jpg"
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Dolphin</h4>
              <span className="profileInfoDesc">Hello my Friends</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed/>
            <Rightbar profile/>
          </div>
        </div>
      </div>
      </>
  )
   
};

export default Profile;
