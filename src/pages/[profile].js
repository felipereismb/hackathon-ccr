import React, { useEffect, useState } from 'react';
import UINavBar from 'app/components/UI/navbar/navbar';
import Profile from 'app/screens/profile/profile';
import Router from 'next/router';
import { loadFirebaseStore, loadFirebaseAuth } from 'app/lib/db';
import {
  USERS_COLLECTION,
  HASHMAPS_COLLECTION,
} from 'app/screens/lib/constants';
import HourglasLoader from 'app/components/UI/loader/hourglass';
import DynamicHead from 'app/components/UI/head/dynamic-head';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { hashmapReset } from 'app/redux/actions/hashmapActions';

const proflie = ({ profile, handlerReset }) => {
  const [hashmaps, setHashmaps] = useState();
  const [lastVisible, setLastVisible] = useState();
  const [hasMoreData, setHasMoreData] = useState(true);
  const [currentUser, setCurrentUser] = useState();
  const LIMIT_ITEMS = 25;

  const refreshData = (data, currentData = []) => {
    const map = [];
    if (data.docs.length) {
      // console.log('Update Data');
      data.forEach(doc => {
        const aux = { ...doc.data(), key: doc.id };
        aux.createdAt = aux.createdAt.toDate().toISOString();
        aux.updatedAt = aux.updatedAt.toDate().toISOString();
        map.push(aux);
      });
      setLastVisible(data.docs[data.docs.length - 1]);
    } else {
      // console.log('Finish Data');
      setHasMoreData(false);
    }
    setHashmaps([...currentData, ...map]);
  };

  const getQueryFb = () => {
    const fb = loadFirebaseStore();
    const hashmpasRef = fb().collection(HASHMAPS_COLLECTION);
    return hashmpasRef
      .where('author', '==', profile.key)
      .orderBy('updatedAt', 'desc');
  };

  useEffect(() => {
    window.onbeforeunload = null;
    let mounted = true;
    if (profile) {
      getQueryFb()
        .limit(LIMIT_ITEMS)
        .get()
        .then(data => {
          if (mounted) {
            refreshData(data);
          }
        });
    }
    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    let mounted = true;
    loadFirebaseAuth().onAuthStateChanged(user => {
      if (user) {
        if (mounted) {
          setCurrentUser(user);
        }
      }
    });
    return () => {
      mounted = false;
    };
  }, []);

  const handlerCreate = () => {
    if (currentUser) {
      handlerReset();
      Router.push('/edit');
    } else {
      Router.push('/login?create=true');
    }
  };

  const fetchMoreData = () => {
    if (lastVisible) {
      // console.log('fetchMoreData');
      getQueryFb()
        .startAfter(lastVisible)
        .limit(LIMIT_ITEMS)
        .get()
        .then(data => refreshData(data, hashmaps));
    }
  };

  return (
    <>
      <DynamicHead
        titleText={profile ? `${profile.displayName} - Hashmap` : undefined}
        description={profile ? profile.bio : undefined}
        imageUrl={
          profile && profile.photoURL && profile.photoURL.url
            ? profile.photoURL.url
            : undefined
        }
      />
      {profile ? (
        <div className="h-screen">
          <UINavBar
            typeNav="profile"
            myProfile={
              currentUser && profile && currentUser.uid === profile.key
            }
          />
          <div className="flex justify-center items-center">
            {profile ? (
              <Profile
                profile={profile}
                hashmaps={hashmaps}
                fetchMoreData={fetchMoreData}
                hasMoreData={hasMoreData}
                handlerCreate={handlerCreate}
                myProfile={currentUser && currentUser.uid === profile.key}
              />
            ) : (
              <div className="w-full justify-center h-64 flex items-end">
                <HourglasLoader className="flex-1" />
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="h-screen">
          <UINavBar typeNav="profile" />
          <div className="md:px-64 text-center pt-16 md:pt-32">
            <img
              className="px-24 pt-8"
              src="imgs/icons/page_not_found.svg"
              alt="not found page"
            />
            <p className="pt-8 md:pb-12 md:pt-12 font-sans text-lg text-gray-600 text-center">
              Página não encontrada :(
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export async function getServerSideProps({ params }) {
  const fb = loadFirebaseStore();
  const profileRef = fb().collection(USERS_COLLECTION);
  let profile;
  try {
    const dataProfile = await profileRef
      .where('username', '==', params.profile)
      .get();
    if (dataProfile.size === 1) {
      dataProfile.forEach(p => {
        const key = p.id;
        profile = { ...p.data(), key };
      });
    }
  } catch (error) {
    console.log(error);
  }
  return { props: { profile } };
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      handlerReset: hashmapReset,
    },
    dispatch
  );

export default connect(null, mapDispatchToProps)(proflie);
