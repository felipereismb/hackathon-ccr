import React, { useMemo, useState } from 'react';
import Item from 'app/components/home/list-hashmaps/list-hashmaps';
import Link from 'next/link';
import {
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaFacebookF,
  FaTwitter,
  FaGithubAlt,
  FaMediumM,
} from 'react-icons/fa';
import CircleLoader from 'app/components/UI/loader/circle';
import CreateHashmapMobile from 'app/components/UI/create-hashmap/mobile';
import InfiniteScroll from 'react-infinite-scroll-component';
import { replaceLink } from '../lib/replaceLinks';
import { FiExternalLink } from 'react-icons/fi';

const Profile = ({
  profile,
  hashmaps,
  fetchMoreData,
  hasMoreData,
  handlerCreate,
  myProfile,
}) => {
  const [socialLinks, setSocialLinks] = useState({});

  useMemo(() => {
    const links = {};
    links.instagram = replaceLink(profile.instagram, 'instagram');
    links.twitter = replaceLink(profile.twitter, 'twitter');
    links.linkedin = replaceLink(profile.linkedin, 'linkedin');
    links.facebook = replaceLink(profile.facebook, 'facebook');
    links.youtube = replaceLink(profile.youtube, 'youtube');
    links.link = replaceLink(profile.link, 'link');
    setSocialLinks(links);
  }, [profile]);

  return (
    <div className="container mx-auto">
      <div className="rounded-lg">
        {profile.photoURL && profile.photoURL.url ? (
          <img
            className="mt-8 mb-6 h-32 w-32 rounded-full mx-auto"
            src={profile.photoURL.url}
            alt="Perfil"
          />
        ) : (
          <img
            className="mt-8 mb-6 h-32 w-32 rounded-full mx-auto"
            src="imgs/avatar/avatar.jpg"
            alt="Perfil"
          />
        )}
        <div className="text-center py-4 px-16">
          <h2 className="font-bold text-lg">{profile.displayName}</h2>
          <div className="font-bold text-purple-500 text-xs">
            @{profile.username}
          </div>
          <div className="pt-4">
            {profile.instagram && (
              <Link href={`${socialLinks.instagram}`}>
                <a target="_blank">
                  <button
                    type="button"
                    className="m-1 bg-gray-100 border hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg inline-flex items-center"
                  >
                    <FaInstagram size={22} />
                  </button>
                </a>
              </Link>
            )}
            {profile.linkedin && (
              <Link href={`${socialLinks.linkedin}`}>
                <a target="_blank">
                  <button
                    type="button"
                    className="m-1 bg-gray-100 border hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg inline-flex items-center"
                  >
                    <FaLinkedin size={22} />
                  </button>
                </a>
              </Link>
            )}
            {profile.youtube && (
              <Link href={`${socialLinks.youtube}`}>
                <a target="_blank">
                  <button
                    type="button"
                    className="m-1 bg-gray-100 border hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg inline-flex items-center"
                  >
                    <FaYoutube size={22} />
                  </button>
                </a>
              </Link>
            )}
            {profile.facebook && (
              <Link href={`${socialLinks.facebook}`}>
                <a target="_blank">
                  <button
                    type="button"
                    className="m-1 bg-gray-100 border hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg inline-flex items-center"
                  >
                    <FaFacebookF size={22} />
                  </button>
                </a>
              </Link>
            )}
            {profile.twitter && (
              <Link href={`${socialLinks.twitter}`}>
                <a target="_blank">
                  <button
                    type="button"
                    className="m-1 bg-gray-100 border hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg inline-flex items-center"
                  >
                    <FaTwitter size={22} />
                  </button>
                </a>
              </Link>
            )}
            {profile.link && (
              <Link href={`${socialLinks.link}`}>
                <a target="_blank">
                  <button
                    type="button"
                    className="m-1 bg-gray-100 border hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg inline-flex items-center"
                  >
                    <FiExternalLink size={22} />
                  </button>
                </a>
              </Link>
            )}
            {profile.github && (
              <button
                type="button"
                className="m-1 bg-gray-100 border hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg inline-flex items-center"
              >
                <FaGithubAlt size={22} />
              </button>
            )}
            {profile.medium && (
              <button
                type="button"
                className="m-1 bg-gray-100 border hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg inline-flex items-center"
              >
                <FaMediumM size={22} />
              </button>
            )}
          </div>
        </div>
      </div>
      {myProfile && (
        <div className="md:hidden block flex justify-center">
          <CreateHashmapMobile handlerCreate={handlerCreate} />
        </div>
      )}
      {!hashmaps && (
        <div className="w-full justify-center h-64 flex items-end">
          <CircleLoader className="flex-1" />
        </div>
      )}
      {hashmaps && hashmaps.length === 0 && !myProfile && (
        <div className="md:px-64 text-center">
          <img
            className="md:hidden px-24 pt-8"
            src="imgs/icons/empty.svg"
            alt="authentication"
          />
          <img
            className="hidden md:block px-24 pt-16 w-full"
            src="imgs/icons/empty.svg"
            alt="authentication"
            style={{ height: 300 }}
          />
          <p className="pt-4 md:pb-12 md:pt-12 font-sans text-lg text-gray-600 text-center">
            Hashmaps incríveis em breve!
          </p>
        </div>
      )}
      {hashmaps && hashmaps.length > 0 && (
        <>
          <h3 className="text-xl md:text-3xl tracking-tight font-extrabold pt-4 ml-5 md:mx-20 md:pt-8 text-indigo-600">
            Curadorias Realizadas:
          </h3>
          <InfiniteScroll
            dataLength={hashmaps.length}
            next={fetchMoreData}
            hasMore={hasMoreData}
          >
            <div className="m-1 md:mx-16 md:mb-16 grid grid-cols-6 gap-4 ">
              {hashmaps.map(hashmap => (
                <div key={hashmap.key} className="col-span-6 xl:col-span-3">
                  <Item hashmap={hashmap} />
                </div>
              ))}
            </div>
          </InfiniteScroll>
        </>
      )}
    </div>
  );
};

export default Profile;
