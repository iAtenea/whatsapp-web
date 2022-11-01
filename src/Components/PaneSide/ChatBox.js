import React from 'react';
import ProfilePhoto from '../HeaderProfile/ProfilePhoto';
import NavMenuChat from './NavMenuChat';

function ChatBox({ setShouldShowMenu, shouldShowMenu }) {
  const [name, setName] = React.useState([]);
  const [text, setText] = React.useState('');

  const nameGenerator = () => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'f1e6bcf417mshd1c0ca4c15bc3bep182d4fjsne4354b9fcedc',
        'X-RapidAPI-Host':
          'dawn2k-random-german-profiles-and-names-generator-v1.p.rapidapi.com',
      },
    };
    fetch(
      'https://dawn2k-random-german-profiles-and-names-generator-v1.p.rapidapi.com/?format=json&gender=b&cc=all&email=gmail.com%2Cyahoo.com&pwlen=12&ip=a&phone=l%2Ct%2Co&seed=helloworld&count=10&maxage=40&minage=30&uuid=1&color=1&lic=1&images=1',
      options
    )
      .then((response) => response.json())
      .then((response) => setName(response))
      .catch((err) => console.error(err));
  };

  React.useEffect(() => {
    nameGenerator();
  }, []);

  const textGenerator = () => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'f1e6bcf417mshd1c0ca4c15bc3bep182d4fjsne4354b9fcedc',
        'X-RapidAPI-Host': 'montanaflynn-lorem-text-generator.p.rapidapi.com',
      },
    };

    fetch(
      'https://montanaflynn-lorem-text-generator.p.rapidapi.com/word?count=20',
      options
    )
      .then((response) => response.json())
      .then((response) => setText(response))
      .catch((err) => console.error(err));
  };

  console.log(text);

  React.useEffect(() => {
    textGenerator();
  }, []);

  return (
    <>
      {name.map((name) => (
        <div className="Chat-container">
          <div className="User-photo">
            <ProfilePhoto />
          </div>
          <div className="Second-container">
            <div className="User-name">
              {name.firstname}
              <div className="User-lastMessage">Chatea</div>
            </div>
            <div className="Third-container">
              <div className="Hour">8:21 a. m.</div>
              <NavMenuChat
                setShouldShowMenu={setShouldShowMenu}
                shouldShowMenu={shouldShowMenu}
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default ChatBox;
