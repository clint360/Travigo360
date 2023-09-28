import { collection } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import firebase from '../firebase';

const db = getFirestore(firebase);

export const collections = Object.freeze({
  users: 'users',
  agencies: 'agencies',
  buses: 'buses',
  bookings: 'bookings',
  payments: 'payments',
  notifications: 'notifications'
});

export const docRefs = Object.freeze({
  users: collection(db, collections.users),
  agencies: collection(db, collections.agencies),
  buses: collection(db, collections.buses),
  bookings: collection(db, collections.bookings),
  payments: collection(db, collections.payments),
  notifications: collection(db, collections.notifications),
});
