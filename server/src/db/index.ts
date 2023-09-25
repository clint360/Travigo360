import { collection } from 'firebase/firestore';
import { db } from '../../firebase/clientApp';

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
