import React from 'react';
import './SideArea.css';
import 'animate.css';

function NavMenuList({ shouldShowMenu }) {
  return shouldShowMenu === true ? (
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
  ) : null;
}

export default NavMenuList;
