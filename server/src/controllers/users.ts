import { Request, Response } from 'express';
import { collections, docRefs } from '../db';
import { User, UserInterface, UserRole } from '../models/User';
import {
  doc,
  addDoc,
  getDoc,
  getDocs,
  Timestamp,
  getFirestore,
} from 'firebase/firestore';
import firebase from '../firebase';
import { timeStampToDateTimeString } from '../utils';
import { CreateUser, Login } from '../dto/User.dto';
const db = getFirestore(firebase);

export const createUser = async (req: Request, res: Response) => {
    try {
      const user = <CreateUser>req.body;
      await addDoc(docRefs.users, {
        ...user,
        role: UserRole.customer,
        createdAt: Timestamp.now()
      });
  
      res.status(200).send('User created successfully');
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };


  export const getUser = async (req: Request, res: Response) => {
    try {
      const userId = req.params.id;
      const userDocSnapshot = await getDoc(doc(db, collections.users, userId))
  
      if (userDocSnapshot.exists()) {
        const user = userDocSnapshot.data();
        res.status(200).json(user);
      } else {
        res.status(404).send('User not found');
      }
    } catch (error: any) {
      res.status(500).send(error.message);
    }
  };

  export const getUsers = async (req: Request, res: Response) => {
    try {
      const users = await getDocs(docRefs.users);
      const usersArray: UserInterface[] = [];
  
      if (users.empty) {
        res.status(400).send('No Users found');
      } else {
        users.forEach((doc) => {
          const user: any = new User(
            doc.id,
            doc.data().firstName,
            doc.data().lastName,
            doc.data().email,
            doc.data().password,
            timeStampToDateTimeString(doc.data().createdAt),
            doc.data().phoneNumber,
            doc.data().role
          );
          usersArray.push(user);
        });
  
        res.status(200).send(usersArray);
      }
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };