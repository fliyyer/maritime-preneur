import React from 'react'
import Footer from '../component/Footer'
import NavBar from '../component/Navbar'
import HeaderTeam from '../component/Teampage/HeaderTeam'
import TeamDesc from '../component/Teampage/TeamDesc'

const TeamPage = () => {
    return (
        <div>
            <NavBar />
            <HeaderTeam />
            <TeamDesc />
            <Footer />
        </div>
    )
}

export default TeamPage
