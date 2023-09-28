import { NextPage } from "next";
import Permission from "./Permission";
import { User } from "./User";
import { RedirectProps } from "../hooks/useAuthState";

export interface TravigoNextPageProps {
    user: User;
    hasPermission: (permission: Permission) => boolean;
  }
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export type TravigoNextPage<T = any> = NextPage<TravigoNextPageProps & T> & {
    auth?: RedirectProps;
  };