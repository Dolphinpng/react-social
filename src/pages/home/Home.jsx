import React from 'react';
import Sidebar from "../../component/sidebar/Sidebar"
import Topbar from "../../component/topbar/Topbar"
import Feed from "../../component/feed/Feed"
import Rightbar from "../../component/rightbar/Rightbar"
import "./home.css"




const Home = () => {
  return (
    <>
     <Topbar/>
     <div className='homeContainer'>
       <Sidebar/>
       <Feed/>
       <Rightbar/>
     </div>
    </>
  )
};

export default Home;
