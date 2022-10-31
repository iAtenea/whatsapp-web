import React from 'react';
import './FirstColumn.css';
import 'animate.css';
import IconsHeader from '../HeaderProfile/IconsHeader';
import Searcher from '../SideArea/Searcher';
import ProfilePhoto from '../HeaderProfile/ProfilePhoto';
import PaneSide from '../SideArea/PaneSide';

function FirstColumn() {
  return (
    <>
      <div className="Container ">
        <div className="Chat-column">
          <div className="Chat-header ">
            <ProfilePhoto />
            <IconsHeader />
          </div>
          <Searcher />
          <div className="Side-area">
            <PaneSide />
          </div>
        </div>
      </div>
    </>
  );
}

export default FirstColumn;
