import React from 'react'
import LandFooter from './LandFooter/LandFooter'
import Banner from './Banner/Banner'
import LandAbout from './LandAbout/LandAbout'

const Home = () =>
{
  return (
    <main>
      {/* this is banner section  */}
      <section>
        <Banner />
      </section>
      {/* About Us section  */}
      <section>
        <LandAbout />
      </section>

      {/* footer section for landing page on the bottom */}
      <section>
        <LandFooter />
      </section>
    </main>
  )
}

export default Home
