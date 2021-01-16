import React from 'react';
import ScreenHashmapEdit from 'app/screens/hashmap/edit';
import { useRouter } from 'next/router';
import DynamicHead from 'app/components/UI/head/dynamic-head';

export default () => {
  const router = useRouter();
  return (
    <>
      <DynamicHead titleText="Editor - Hashmap" />
      <ScreenHashmapEdit params={router.query} />
    </>
  );
};
