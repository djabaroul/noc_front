import React ,{useState} from 'react'
import { Link } from 'react-router-dom'

import user_image from '../../assets/images/favicon.png'
import user_menu from '../../assets/JsonData/user_menus.json'
import './topnav.css'
import Table from '../table/Table'
import Dropdown from '../dropdown/dropdown'
import notifications from '../../assets/JsonData/notification.json'
import ThemeMenu  from '../thememenu/ThemeMenu'

const curr_user = {
  display_name:'Noc',
  image:user_image
}

const renderNotificationItem = (item,index)=> (
    <div className="notification-item" key={index}>
     <i className={item.icon}></i>
     <span>{item.content}</span>
      
    </div>
)

const renderUserToggle = (user)=>(
  <div className="topnav_right_user">
    <div className="topnav_right_user_image">
       <img src={user.image}  alt="" />
    </div>
    <div className="topnav_right_user_name">
      {user.display_name}
    </div>
  </div>
)

const renderUserMenu=(item,index)=>(
  <Link to='/' key={index}>
    <div className='notification-item'>
      <i className={item.icon}></i>
      <span>{item.content}</span>
    </div>
  </Link>
)


const Topnav = () => {
  const [searchTerm, setSearchTerm]= useState("");
    return (
        <div className="topnav">
          <div className="topnav_search">
            <input 
            type="text" 
            placeholder='Search here...'
            onChange={(e)=> {setSearchTerm(e.target.value);}}
            />
            <i className='bx bx-search'></i>
          </div>
          <div className="topnav_right ">
            <div className="topnav_right-item">
              {/* dropdown */}
              <Dropdown
                
                customToggle={() =>renderUserToggle(curr_user)}
                contentData={user_menu}
                renderItems={(item,index)=>renderUserMenu(item,index)}
              />
            </div>
            <div className="topnav_right-item">
              <Dropdown
                icon='bx bx-bell'
                badge='12'
                contentData={notifications}
                renderItems={(item,index)=>renderNotificationItem(item,index)}
                renderFooter={()=><Link to=''>View All</Link>}
              />
            {/* dropdown */}
            </div>
            <div className="topnav_right-item">
              {/* Theme setting */}
              <ThemeMenu/>
              
            </div>
          </div>
            
        </div>
    )
}

export default Topnav
