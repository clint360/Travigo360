import { Timestamp } from "firebase/firestore";

export function timeStampToDateTimeString(timestamp: Timestamp) {
    return dateToDateTimeString(timestamp.toDate());
  }
  
  export function dateToDateTimeString(date: Date): string {
    return new Intl.DateTimeFormat('en-GB', {
      dateStyle: 'full',
      timeStyle: 'long',
    }).format(date);
  }
  