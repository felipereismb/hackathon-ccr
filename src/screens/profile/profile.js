import React from "react";

import UINavBar from "app/components/UI/navbar/navbar";
import ProfileComponent from 'src/components/profile';

const Profile = () => {
  return (
    <>
      <UINavBar type="dash" />
      <ProfileComponent />
    </>
  );
};

export default Profile;
