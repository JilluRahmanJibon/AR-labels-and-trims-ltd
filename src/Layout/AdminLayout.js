import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import AdminDashboardNav from '../Pages/AdminDashboard/AdminDashboardNav/AdminDashboardNav'
import ProtectedRoute from './ProtectedRoute'
import { useQuery } from '@tanstack/react-query'
import Spinner from '../Components/Loader/Spinner'


const AdminLayout = () =>
{
    const navigate = useNavigate();

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
    if (error)
    {
        localStorage.removeItem('authToken')
        return navigate('/login')

    } else if (isLoading)
    {
        return <Spinner />
    }


    return (
        <main>
            <ProtectedRoute requiredRole={datas?.data?.role} >

                <section >
                    <AdminDashboardNav datas={datas} />
                </section>
                <section >
                    <Outlet />
                </section>

            </ProtectedRoute>
        </main>
    )
}

export default AdminLayout
