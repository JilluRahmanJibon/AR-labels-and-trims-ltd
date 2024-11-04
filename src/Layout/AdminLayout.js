import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminDashboardNav from '../Pages/AdminDashboard/AdminDashboardNav/AdminDashboardNav'
import AdminDashboardLeftNav from '../Pages/AdminDashboard/AdminDashboardLeftNav/AdminDashboardLeftNav'
import Footer from '../Shared/Footer/Footer'
import ProtectedRoute from './ProtectedRoute'

const Root2 = () =>
{
    return (
        <main>
            <ProtectedRoute>

                <section>
                    <AdminDashboardNav />
                    <AdminDashboardLeftNav />
                </section>
                <section >
                    <Outlet />
                </section>
                <section >
                    <Footer />
                </section>
            </ProtectedRoute>
        </main>
    )
}

export default Root2
