import React, { useEffect } from 'react';
import { createClient } from 'pexels';
import photoLocal from '../../img/photo.jpg';
import './HeaderProfile.css';

function ProfilePhoto() {
  const [userPhoto, setUserPhoto] = React.useState(photoLocal);

  const client = createClient(
    '563492ad6f91700001000001b97157823092485884e6f34cd3a90826'
  );

  const getPhoto = () => {
    client.photos.show({ id: 2014420 }).then((photo) => {
      setUserPhoto(photo.src.original);
    });
  };

  useEffect(() => {
    getPhoto();
  }, []);

  return (
    <div className="Container-photo">
      <img className="Photo" src={userPhoto} alt="Profile Picture" />
    </div>
  );
}

export default ProfilePhoto;
