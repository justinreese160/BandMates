import React, { useState } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import Authservice from '../utils/auth';
import './style/fonts/sacco-condensed.ttf';
import './style/NavTabsDashboard.css';

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
    <div style={{ backgroundColor: "#1c2529", borderBottomStyle: "outset" }}>
      <Menu pointing secondary>
          <img src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/016/653/original/Screen_Shot_2021-09-02_at_11.28.10_AM.png?1630867770" style={{ width: "110px", heigh: "30vh", marginLeft: "35px", marginBottom: ".5vw", marginTop: ".5vw" }}></img>
        <Menu.Menu position='right'>
          <Menu.Item style={{ color: "#fdd05a", fontSize: "2vw", textShadow: "-1px 1px 2px #000", }}
            name='View All Posts'
            active={activeItem === 'viewallposts'}
            onClick={handleItemClick}
            as={Link}
            to="/viewallposts"
          />
          <Menu.Item style={{ color: "#fdd05a", fontSize: "2vw", textShadow: "-1px 1px 2px #000" }}
            name='View My Posts'
            active={activeItem === 'viewmyposts'}
            onClick={handleItemClick}
            as={Link}
            to="/viewmyposts"
          />
          <Menu.Item style={{ color: "#fdd05a", fontSize: "2vw", textShadow: "-1px 1px 2px #000" }}
            name='Create Post'
            active={activeItem === 'createpost'}
            onClick={handleItemClick}
            as={Link}
            to="/createpost"
          />
          <Menu.Item className="login" style={{ color: "#fdd05a", fontSize: "2vw", textShadow: "-1px 1px 2px #000" }}
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
