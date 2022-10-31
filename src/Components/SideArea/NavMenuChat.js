import React from 'react';
import './SideArea.css';
import 'animate.css';

function NavMenuChat() {
  const [shouldShowMenu, setShouldShowMenu] = React.useState(false);
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

  const navMenu = (
    <div className="Nav-menu">
      <ul className="Nav-list">
        <li className="Nav-item">Archivar chat</li>
        <li className="Nav-item">Silenciar notificaciones</li>
        <li className="Nav-item">Eliminar chat</li>
        <li className="Nav-item">Fijar chat</li>
        <li className="Nav-item">Editar etiqueta</li>
        <li className="Nav-item">Marcar como no leído</li>
      </ul>
    </div>
  );

  const toggleNavMenu = () => {
    setShouldShowMenu(!shouldShowMenu);
  };

  return (
    <>
      <nav>
        <button className="DownArrowButton" onClick={toggleNavMenu}>
          {svgDownArrow}
        </button>
      </nav>
      {shouldShowMenu === true ? <div>{navMenu}</div> : null}
    </>
  );
}

export default NavMenuChat;
