import React, { useState } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import './style/NavTabsHome.css';

function NavTabsHome() {
  console.log('NAV TABS!!!!!!!')
  const [activeItem, setActiveItem] = useState('home');
  const pathname = window.location.pathname;
  const path = pathname === "/" ? 'home' : pathname.substr(1);

  const handleItemClick = (e, { name }) => setActiveItem(name);

    return (
      <div className="nav-bar-home" style={{borderBottomStyle:"outset"}}>
        <Menu pointing secondary>
          <Menu.Item className="home" style ={{color:"#fdd05a", fontSize:"3vw", textShadow:"-1px 1px 2px #000", fontFamily:"sans-serif"}}
            name='home'
            active={activeItem === 'home'}
            onClick={handleItemClick}
            as={ Link }
            to="/"
          />
          <Menu.Menu position='right'>
          <Menu.Item className="login" style ={{color:"#fdd05a", fontSize:"3vw", textShadow:"-1px 1px 2px #000", fontFamily:"sans-serif" }}
            name='login'
            active={activeItem === 'login'}
            onClick={handleItemClick}
            as={ Link }
            to="/login"
          />
          <Menu.Item className="signup" style ={{color:"#fdd05a", fontSize:"3vw", textShadow:"-1px 1px 2px #000", fontFamily:"sans-serif"}}
            name='signup'
            active={activeItem === 'signup'}
            onClick={handleItemClick}
            as={ Link }
            to="/signup"
          />
          </Menu.Menu>
        </Menu>
      </div>
    )
  }


export default NavTabsHome;
