import React, { useEffect } from 'react';
import SignIn from 'app/screens/login/sign-in';
import DynamicHead from 'app/components/UI/head/dynamic-head';

export default () => {
  useEffect(() => {
    window.onbeforeunload = null;
  }, []);
  return (
    <>
      <DynamicHead titleText="Login - Brasis" />
      <div
        className="h-screen"
        style={{
          backgroundImage: "url(imgs/backgrounds/intro.png)",
          backgroundRepeat: "no-repeat",
          objectFit: "cover",
          backgroundSize: "cover",
        }}
      >
        <div className="py-6 md:pt-32 flex justify-center items-center">
          <SignIn />
        </div>
      </div>
    </>
  );
};
