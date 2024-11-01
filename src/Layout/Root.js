import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Shared/Navbar/Navbar2'
import Footer from '../Shared/Footer/Footer'

const Root = () =>
{
    return (
        <main>
            <section>
                {/* <Navbar /> */}
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
