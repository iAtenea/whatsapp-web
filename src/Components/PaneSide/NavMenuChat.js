import React from 'react';
import './SideArea.css';
import 'animate.css';
import NavMenuList from './NavMenuList';

function NavMenuChat({ setShouldShowMenu, shouldShowMenu }) {
  const svgDownArrow = (
    <svg
      viewBox="0 0 18 18"
      height="18"
      width="18"
      preserveAspectRatio="xMidYMid meet"
      class=""
      version="1.1"
      x="0px"
    >
      <path
        fill="#8696a0"
        d="M3.3,4.6L9,10.3l5.7-5.7l1.6,1.6L9,13.4L1.7,6.2L3.3,4.6z"
      ></path>
    </svg>
  );

  const toggleNavMenu = (e) => {
    setShouldShowMenu(!shouldShowMenu);
    console.log(e.clientY);
  };

  return (
    <>
      <NavMenuList
        setShouldShowMenu={setShouldShowMenu}
        shouldShowMenu={shouldShowMenu}
      />
      <nav>
        <button className="DownArrowButton" onClick={toggleNavMenu}>
          {svgDownArrow}
        </button>
      </nav>
    </>
  );
}

export default NavMenuChat;
