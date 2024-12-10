import React, { Suspense, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../Components/Loader/Spinner';
import { BaseURL } from '../utils/BaseURL';

// Lazy load `AdminDashboardNav` and `ProtectedRoute` to improve performance
const AdminDashboardNav = React.lazy(() => import('../Pages/AdminDashboard/AdminDashboardNav/AdminDashboardNav'));
const ProtectedRoute = React.lazy(() => import('./ProtectedRoute'));

const fetchUserDetails = async (token) =>
{
    const response = await fetch(`${ BaseURL }/users/me`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: token,
        },
    });

    if (!response.ok) throw new Error('Unauthorized');
    return response.json();
};

const AdminLayout = () =>
{
    const navigate = useNavigate();
    const token = localStorage.getItem('authToken');

    // Fetch user details only if the token exists
    const { isLoading, data, error } = useQuery({
        queryKey: [ '/users/me' ],
        queryFn: () => fetchUserDetails(token),
        enabled: !!token, // Only run if token is available
    });

    // Handle unauthorized responses or errors
    useEffect(() =>
    {
        if (!isLoading && error)
        {
            navigate('/login');
        }
    }, [ isLoading, error, navigate ]);

    // Show a loader while fetching
    if (isLoading) return <Spinner />;

    return (
        <main>
            <Suspense fallback={<Spinner />}>
                <ProtectedRoute requiredRole={data?.data?.role}>
                    <section>
                        <Suspense fallback={<Spinner />}>
                            <AdminDashboardNav data={data?.data} />
                        </Suspense>
                    </section>
                    <section>
                        <Outlet />
                    </section>
                </ProtectedRoute>
            </Suspense>
        </main>
    );
};

export default AdminLayout;
