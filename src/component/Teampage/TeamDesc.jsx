import React from 'react'
import CardTeam from './CardTeam'

const TeamDesc = () => {
    return (
        <div className='container mx-auto px-7 py-8  '>
            <h1 className='font-bold text-3xl text-primary-color text-center'>Our Team</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-2 ">
                <CardTeam
                    title='Make digital
                transformation happens'
                    desc='We believe that integration of digital technology is a must for all sectors to keep us competitivein the world' />
                <CardTeam
                    title='Make digital
                transformation happens'
                    desc='We believe that integration of digital technology is a must for all sectors to keep us competitivein the world' />
                <CardTeam
                    title='Make digital
                transformation happens'
                    desc='We believe that integration of digital technology is a must for all sectors to keep us competitivein the world' />
            </div>
        </div>
    )
}

export default TeamDesc
