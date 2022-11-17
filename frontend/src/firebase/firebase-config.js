import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // from
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_apiKey,
	authDomain: process.env.REACT_APP_FIREBASE_authDomain,
	projectId: process.env.REACT_APP_FIREBASE_projectId,
	storageBucket: process.env.REACT_APP_FIREBASE_storageBucket,
	messagingSenderId: process.env.REACT_APP_FIREBASE_messagingSenderId,
	appId: process.env.REACT_APP_FIREBASE_appId,
};

/* const firebaseConfig = {
  apiKey: "AIzaSyCzLJu4EzDyHqGzHlBwPsRGohMpJ_l2c2M",
  authDomain: "refinance-552f5.firebaseapp.com",
  projectId: "refinance-552f5",
  storageBucket: "refinance-552f5.appspot.com",
  messagingSenderId: "31318690737",
  appId: "1:31318690737:web:5bbfacc69b3faf7116cb90"
}; */

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app)

export default app;
