import React from 'react'
import Footer from '../component/Footer'
import NavBar from '../component/Navbar'
import HeaderTeam from '../component/Teampage/HeaderTeam'
import ProfileTeam from '../component/Teampage/ProfileTeam'

const TeamPage = () => {
    return (
        <div>
            <NavBar />
            <HeaderTeam />
            <ProfileTeam />
            <Footer />
        </div>
    )
}

export default TeamPage
