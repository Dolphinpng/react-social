import React from 'react';
import {RssFeed,Chat,PlayCircleFilledOutlined,Group,Bookmark,HelpOutline,WorkOutline,Event,School} from "@material-ui/icons"
import {Users} from "../../dummyData"
import CloseFriend from "../closeFriend/CloseFriend"

import "./sidebar.css"

const Sidebar = () => {
  return ( 
       <div className='sidebar'>
         <div className='sidebarWrapper'>
           <ul className='sidebarList'>
             <li className='siderListItem'>
               <RssFeed className="sidebarIcon"/>
               <span className='sidebarListItemText'>Feed</span>
             </li>
             <li className='siderListItem'>
               <Chat className="sidebarIcon"/>
               <span className='sidebarListItemText'>Chats</span>
             </li>
             <li className='siderListItem'>
               <PlayCircleFilledOutlined className="sidebarIcon"/>
               <span className='sidebarListItemText'>Videos</span>
             </li>
             <li className='siderListItem'>
               <Group className="sidebarIcon"/>
               <span className='sidebarListItemText'>Groups</span>
             </li>
             <li className='siderListItem'>
               <Bookmark className="sidebarIcon"/>
               <span className='sidebarListItemText'>Bookmarks</span>
             </li>
             <li className='siderListItem'>
               <HelpOutline className="sidebarIcon"/>
               <span className='sidebarListItemText'>Questions</span>
             </li>
             <li className='siderListItem'>
               <WorkOutline className="sidebarIcon"/>
               <span className='sidebarListItemText'>Jobs</span>
             </li>
             <li className='siderListItem'>
               <Event className="sidebarIcon"/>
               <span className='sidebarListItemText'>Events</span>
             </li>
             <li className='siderListItem'>
               <School className="sidebarIcon"/>
               <span className='sidebarListItemText'>Courses</span>
             </li>
           </ul>
           <button  className='sidebarButton' >Show More</button>
           <hr className='sidebarHr' />
           <ul className='sidebarFriendList'>
             {Users.map((u)=> (
               <CloseFriend  key={u.id} user={u} />
             ))}
           </ul>
         </div>
      </div>
  )
};

export default Sidebar;
