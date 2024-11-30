import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Shared/Navbar/Navbar'
import Footer from '../Shared/Footer/Footer'
import { useQuery } from '@tanstack/react-query'
import Spinner from '../Components/Loader/Spinner'
import { BaseURL } from '../utils/BaseURL'

const Root = () =>
{
    const { isLoading,  data } = useQuery({
        queryKey: [ '/categories' ],
        queryFn: () =>
            fetch(`${ BaseURL }/categories`, {
                method: 'GET'
            }).then((res) =>
                res.json(),
            ),
    })
    
    if (isLoading) return <Spinner />


    return (
        <main>
            <section>
                <Navbar data={data} />
            </section>
            <section >
                <Outlet />
            </section>
            <section >
                <Footer />
            </section>
        </main>
    )
}

export default Root
