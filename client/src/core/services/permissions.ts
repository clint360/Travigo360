import Permission from "../domains/Permission";
import { User } from "../domains/User";

export const rolePermisions: { [k: string]: Permission[] } = {
  ADMIN: ["VIEW_ACCOUNTS", "VIEW_AGENCIES"],
  CUSTOMER: [],
  AGENCY_ADMIN: ["CRUD_BUSES"],
};

export function getRolePermisions(user: User) {
  switch (user.role) {
    case "ADMIN":
      return rolePermisions.ADMIN;
    case "AGENCY_ADMIN":
      return rolePermisions.AGENCY_ADMIN;
    case "CUSTOMER":
      return rolePermisions.CUSTOMER;
  }
}
