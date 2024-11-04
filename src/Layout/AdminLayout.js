import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminDashboardNav from '../Pages/AdminDashboard/AdminDashboardNav/AdminDashboardNav'
import AdminDashboardLeftNav from '../Pages/AdminDashboard/AdminDashboardLeftNav/AdminDashboardLeftNav'
import Footer from '../Shared/Footer/Footer'
import ProtectedRoute from './ProtectedRoute'
import { useQuery } from '@tanstack/react-query'
import Spinner from '../Components/Loader/Spinner'

const AdminLayout = () =>
{
    const token = localStorage.getItem('authToken')
    const { isLoading, error, data: datas } = useQuery({
        queryKey: [ '/users/me' ],
        queryFn: () =>
            fetch(`${ process.env.REACT_APP_BASE_URL }/users/me`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `${ token }`,
                },
            }).then((res) =>
                res.json(),

            ),
    })
    if (isLoading) return <Spinner />
    const { data } = datas
    return (
        <main>
            <ProtectedRoute>

                <section className='fixed'>
                    <AdminDashboardNav data={data} />
                    <AdminDashboardLeftNav data={data} />
                </section>
                <section >
                    <Outlet />
                </section>
                <section >
                    {/* <Footer /> */}
                </section>
            </ProtectedRoute>
        </main>
    )
}

export default AdminLayout
