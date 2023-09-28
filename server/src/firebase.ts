import { initializeApp } from 'firebase/app';
import 'firebase/firestore';
import config from './config';

const firebase = initializeApp(config.firebaseConfig);
export default firebase;