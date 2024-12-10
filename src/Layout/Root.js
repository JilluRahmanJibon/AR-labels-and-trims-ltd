import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../Components/Loader/Spinner';
import { BaseURL } from '../utils/BaseURL';

// Lazy load Navbar and Footer to improve initial render
const Navbar = React.lazy(() => import('../Shared/Navbar/Navbar'));
const Footer = React.lazy(() => import('../Shared/Footer/Footer'));

// Fetch Categories Function
const fetchCategories = async () =>
{
    const response = await fetch(`${ BaseURL }/categories`, { method: 'GET' });
    if (!response.ok) throw new Error('Failed to fetch categories');
    return response.json();
};

const Root = () =>
{
    const { isLoading, data, error } = useQuery({
        queryKey: [ '/categories' ],
        queryFn: fetchCategories,
    });

    // Handle loading/error states gracefully
    if (isLoading) return <Spinner />;
    if (error) return <div>Error loading data</div>;

    return (
        <main>
            <Suspense fallback={<Spinner />}>
                <section>
                    <Navbar data={data} />
                </section>
            </Suspense>

            <section>
                <Outlet />
            </section>

            <Suspense fallback={<Spinner />}>
                <section>
                    <Footer />
                </section>
            </Suspense>
        </main>
    );
};

export default Root;
