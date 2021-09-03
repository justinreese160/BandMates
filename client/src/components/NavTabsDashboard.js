import React, { useState } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import Authservice from '../utils/auth';

function NavTabsDashboard(props) {
  console.log('NAV HOME!!!')
  const [activeItem, setActiveItem] = useState('home');
  const pathname = window.location.pathname;
  const path = pathname === "/" ? 'home' : pathname.substr(1);

  const handleItemClick = (e, { name }) => setActiveItem(name);

  if(props.loggedIn === true){
     // do these tabs
  } else {
    // do these tabs
  }

    return (
      <div style ={{backgroundColor:"#1c2529"}}>
        <Menu pointing secondary>
        
          <Menu.Item style ={{color:"#fdd05a", fontSize:"2vw", textShadow:"-1px 1px 2px #000", fontFamily:"sans-serif"}}
            name='Dashboard'
            active={activeItem === 'dashboard'}
            onClick={handleItemClick}
            as={ Link }
            to="/dashboard"
          />
          <Menu.Menu position='right'>
          <Menu.Item style ={{color:"#fdd05a", fontSize:"2vw", textShadow:"-1px 1px 2px #000", fontFamily:"sans-serif"}}
            name='View All Posts'
            active={activeItem === 'viewallposts'}
            onClick={handleItemClick}
            as={ Link }
            to="/viewallposts"
          />
          <Menu.Item style ={{color:"#fdd05a", fontSize:"2vw", textShadow:"-1px 1px 2px #000", fontFamily:"sans-serif"}}
            name='View My Posts'
            active={activeItem === 'viewmyposts'}
            onClick={handleItemClick}
            as={ Link }
            to="/viewmyposts"
          />
          <Menu.Item style ={{color:"#fdd05a", fontSize:"2vw", textShadow:"-1px 1px 2px #000", fontFamily:"sans-serif"}}
            name='Create Post'
            active={activeItem === 'createpost'}
            onClick={handleItemClick}
            as={ Link }
            to="/createpost"
            />
            <Menu.Item className="login" style={{ color: "#fdd05a", fontSize: "2vw", textShadow: "-1px 1px 2px #000", fontFamily: "sans-serif" }}
              name='logout'
              active={activeItem === 'logout'}
              onClick={Authservice.logout}
              as={Link}
              to="/"

            />
          </Menu.Menu>
        </Menu>
      </div>
    )
  }


export default NavTabsDashboard;
