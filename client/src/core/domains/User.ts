

export type UserRole = 'ADMIN' | 'CUSTOMER' | 'AGENCY'

export type User = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: UserRole;
    createdAt: string
    phoneNumber: number
}