import React from 'react';
import './FirstColumn.css';
import '../SecondColumn/SecondColumn.css';
import 'animate.css';
import IconsHeader from '../HeaderProfile/IconsHeader';
import Searcher from '../PaneSide/Searcher';
import ProfilePhoto from '../HeaderProfile/ProfilePhoto';
import PaneSide from '../PaneSide/PaneSide';

function FirstColumn({ setShouldShowMenu, shouldShowMenu }) {
  return (
    <>
      <div className="First-column-container">
        <div className="Chat-column">
          <div className="Chat-header ">
            <ProfilePhoto />
            <IconsHeader />
          </div>
          <Searcher />
          <div className="Side-area">
            <PaneSide
              setShouldShowMenu={setShouldShowMenu}
              shouldShowMenu={shouldShowMenu}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default FirstColumn;
