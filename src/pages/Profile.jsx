import React from 'react';

const Profile = ({handleLogout}) => {

  return (
    <div className="profile-page">
      <h1>Your Profile</h1>
      <button onClick={handleLogout} className="logout-btn">
        Logout
      </button>
    </div>
  );
};

export default Profile;

