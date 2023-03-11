import React from 'react'
import Footer from '../component/Footer'
import NavBar from '../component/Navbar'
import HeaderTeam from '../component/Teampage/HeaderTeam'
import OurTeam from '../component/Teampage/OurTeam'
import ProfileTeam from '../component/Teampage/ProfileTeam'

const TeamPage = () => {
    return (
        <div>
            <NavBar />
            <HeaderTeam />
            <OurTeam />
            <ProfileTeam />
            <Footer />
        </div>
    )
}

export default TeamPage
