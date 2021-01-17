import React from "react";

const Profile = () => {
  return (
    <div className="container mx-auto">
      <div className="rounded-lg">
        <img
          className="mt-8 mb-6 h-32 w-32 rounded-full mx-auto"
          src="imgs/user.jpeg"
          alt="Perfil"
        />

        <div className="text-center py-4 px-16">
          <h2 className="font-bold text-lg">Felipe Reis</h2>
          <div className="font-bold text-purple-500 text-xs">@felipermb</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
