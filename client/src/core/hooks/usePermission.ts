import { useMemo } from 'react';
import Permission from '../domains/Permission';

type UserRole = 'ADMIN' | 'CUSTOMER' | 'AGENCY'

type User = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: UserRole;
    createdAt: string
    phoneNumber: number
}

const rolePermisions: { [k: string]: Permission[] } = {
  ADMIN: [
    'VIEW_ACCOUNTS',
    'VIEW_AGENCIES',
  ],
  CUSTOMER: [],
  AGENCY: ['CRUD_BUSES']
  }

type PermissionMap = Record<Permission, boolean>;

export const useRole = (account?: any): UserRole[] => {
  return account?.role?.length ? account.role : ['STUDENT'];
};

const usePermission = (account: User) => {
  const roles = useRole(account);
  const permissions: PermissionMap = useMemo(
    () =>
      roles.reduce(
        (acc, role) =>
          rolePermisions[role].reduce(
            (a, permission) => ({ ...a, [permission]: true }),
            acc
          ),
        {} as PermissionMap
      ),
    [roles]
  );
  const hasPermission = (permision: Permission) => permissions[permision];

  return {
    hasPermission,
    permissions,
  };
};

export default usePermission;
