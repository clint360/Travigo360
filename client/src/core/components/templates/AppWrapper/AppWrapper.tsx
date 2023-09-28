import { TravigoNextPage } from '@/core/domains'
import { User } from '@/core/domains/User'
import { getRolePermisions } from '@/core/services/permissions'
import React from 'react'

const AppWrapper = (Page: TravigoNextPage, pageTitle: string) => {
    function AppPage({ user, ...props }: { user: User }) {
       user = {
        id: "1",
        firstName: "Chia",
        lastName: "Clint",
        email: 'asdasd@gmail.com',
        password: "13213123",
        role: "ADMIN",
        createdAt: '12213',
        phoneNumber: '1223122'
       }
       const permissions = getRolePermisions(user);

       return <Page
        permissions={permissions}
        user={user}
        {...props}
       />
    }
    AppPage.auth = true;
    return AppPage
}

export default AppWrapper