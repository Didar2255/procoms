import { initializeApp } from 'firebase/app';
import 'firebase/firestore';
import firebaseConfig from './Firebase.config';

const initializeAuthentication = () => {
  initializeApp(firebaseConfig);
};

export default initializeAuthentication;
