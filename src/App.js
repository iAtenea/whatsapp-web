import React from 'react';
import Background from './Components/Background/Background';
import FirstColumn from './Components/FirstColumn/FirstColumn';
import SecondColumn from './Components/SecondColumn/SecondColumn';
import './Components/FirstColumn/FirstColumn.css';

function App() {
  const [shouldShowMenu, setShouldShowMenu] = React.useState(false);
  return (
    <>
      <div className="General-container">
        <Background />
        <div className="Two-colums-container">
          <FirstColumn
            setShouldShowMenu={setShouldShowMenu}
            shouldShowMenu={shouldShowMenu}
          />
          <SecondColumn />
        </div>
      </div>
    </>
  );
}

export default App;
