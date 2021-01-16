import { loadFirebaseStorage } from 'app/lib/db';

const storage = loadFirebaseStorage();

export const getUrlImage = path => {
  return storage.child(path).getDownloadURL();
};
