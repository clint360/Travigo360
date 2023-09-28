import { User as FirebaseUser } from 'firebase/auth';
import { Timestamp } from 'firebase/firestore';


export type UserInterface = FirebaseUser & {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: UserRole;
    phoneNumber: number;
    createdAt: Timestamp
  }
  
  type UserRole = 'ADMIN' | 'CUSTOMER' | 'AGENCY'

  export class User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: UserRole;
    createdAt: string
    phoneNumber: number
  
    constructor(
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      password: string,
      createdAt: string,
      phoneNumber: number,
      role: UserRole
    ) {
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.password = password;
      this.createdAt = createdAt;
      this.phoneNumber = phoneNumber;
      this.role = role;
    }
  }