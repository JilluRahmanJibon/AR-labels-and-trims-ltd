import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminDashboardNav from '../Pages/AdminDashboard/AdminDashboardNav/AdminDashboardNav'
import Footer from '../Shared/Footer/Footer'

const Root2 = () =>
{
    return (
        <main>
            <section>
                <AdminDashboardNav />
                {/* <AdminDashboardLeftNav /> */}
            </section>
            <section >
                <Outlet />
            </section>
        </main>
    )
}

export default Root2
