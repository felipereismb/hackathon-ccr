import React, { useEffect, useState } from 'react';
import UINavBar from 'app/components/UI/navbar/navbar';
import DynamicHead from 'app/components/UI/head/dynamic-head';
import HashmapList from 'app/components/hashdash/hashmap-list';
import { loadFirebaseStore } from 'app/lib/db';
import { HASHMAPS_COLLECTION, HASHDASH } from 'app/screens/lib/constants';
import { UserService } from 'app/services/user.service';
import withAuthorization from 'app/screens/lib/withAuthorization';

const hashdash = () => {
  const LIMIT_ITEMS = 15;
  const [hashmaps, setHashmaps] = useState([]);
  const [startAt, setStartAt] = useState();
  const [endAt, setEndAt] = useState();

  const getQueryFb = () => {
    const fb = loadFirebaseStore();
    return fb()
      .collection(HASHMAPS_COLLECTION)
      .orderBy('createdAt', 'desc');
  };

  const refreshUsers = data => {
    const userService = new UserService();
    const promises = [];
    data.forEach(item => promises.push(userService.getUserById(item.author)));
    Promise.all(promises).then(authorData => {
      authorData.forEach((author, index) => {
        data[index].authorData = author.data();
      });
      setHashmaps(data);
    });
  };

  const refreshData = data => {
    const map = [];
    if (data.docs.length) {
      data.forEach(doc => {
        const aux = { ...doc.data(), key: doc.id };
        aux.createdAt = aux.createdAt.toDate().toISOString();
        aux.updatedAt = aux.updatedAt.toDate().toISOString();
        map.push(aux);
      });
      setStartAt(data.docs[0]);
      setEndAt(data.docs[data.docs.length - 1]);
      refreshUsers(map);
    }
  };

  useEffect(() => {
    let mounted = true;
    window.onbeforeunload = null;
    getQueryFb()
      .limit(LIMIT_ITEMS)
      .get()
      .then(data => {
        if (mounted) {
          refreshData(data);
        }
      });
    return () => {
      mounted = false;
    };
  }, []);

  const handlerNext = () => {
    if (endAt) {
      // console.log('handlerNext');
      getQueryFb()
        .startAfter(endAt)
        .limit(LIMIT_ITEMS)
        .get()
        .then(data => refreshData(data));
    }
  };

  const handlerPrevious = () => {
    if (startAt) {
      // console.log('handlerPrevious');
      getQueryFb()
        .endBefore(startAt)
        .limitToLast(LIMIT_ITEMS)
        .get()
        .then(data => refreshData(data));
    }
  };
  return (
    <>
      <DynamicHead titleText="Hashdash" />
      <UINavBar typeNav="hashdash" />
      <HashmapList
        hashmaps={hashmaps}
        handlerNext={handlerNext}
        handlerPrevious={handlerPrevious}
      />
    </>
  );
};

export default withAuthorization(hashdash, HASHDASH);
