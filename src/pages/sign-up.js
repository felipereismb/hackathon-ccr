import React, { useEffect } from 'react';
import SignUp from 'app/screens/login/sign-up';
import UINavBar from 'app/components/UI/navbar/navbar';
import DynamicHead from 'app/components/UI/head/dynamic-head';

export default () => {
  useEffect(() => {
    window.onbeforeunload = null;
  }, []);
  return (
    <>
      <DynamicHead titleText="SignUp - Hashmap" />
      <div className="h-screen">
        <UINavBar typeNav="signin" />
        <div className="py-4 md:pt-24 flex justify-center items-center">
          <SignUp />
        </div>
      </div>
    </>
  );
};
