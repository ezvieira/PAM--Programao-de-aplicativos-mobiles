import { initializeApp, getApp, getApps } from 'firebase/app';
import {
  initializeAuth,
  getAuth,
  getReactNativePersistence
} from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAI51-sb0CEX6NLZkBFfAnKXxEPBp-ne24",
  authDomain: "minhacolecao-207ab.firebaseapp.com",
  projectId: "minhacolecao-207ab",  
  storageBucket: "minhacolecao-207ab.firebasestorage.app",
  messagingSenderId: "860134215505",
  appId: "1:860134215505:web:1d2e0841966e5423964d70"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

let auth;
try {
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
  });
} catch (error) {
  // Evita erro de inicialização duplicada durante recarregamentos do Expo.
  auth = getAuth(app);
}

const db = getFirestore(app);

export { auth, db };
