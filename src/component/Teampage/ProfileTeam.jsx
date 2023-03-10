import React from 'react'
import CardProfile from '../../component/Teampage/CardProfile'
import Profile1 from '../../assets/profile1.png'
import Profile2 from '../../assets/profile2.png'
import Profile3 from '../../assets/profile3.png'
import Profile4 from '../../assets/profile4.png'
import Profile5 from '../../assets/profile5.png'
import Profile6 from '../../assets/profile6.png'

const ProfileTeam = () => {
    return (
        <div className="container mx-auto px-4 py-6">
            <div>
                <h1 className='text-center font-semibold text-4xl my-16'>Board of
                    Commisioners</h1>
                <div className="flex gap-20 -mx-2">
                    <CardProfile
                        name="Dr. I Wayan Nurjaya"
                        position="President Commisioner"
                        image={Profile1}
                        description="Strategic thinker with a proven track 
                    record of driving growth and 
                    delivering results."
                    />
                    <CardProfile
                        name="M. Ronald David"
                        position="Managing Director"
                        image={Profile2}
                        description="Innovative problem-solver with the 
                    ability to find creative solutions to 
                    complex challenges."
                    />
                </div>
            </div>
            <div>
                <h1 className='text-center font-semibold text-4xl my-16'>Board of Directors</h1>
                <div className="flex gap-20 -mx-2">
                    <CardProfile
                        name="Dr. Catur Prasetyo"
                        position="President Director"
                        image={Profile3}
                        description="Visionary leader with a proven track 
                        record of driving growth and 
                        profitability."
                    />
                    <CardProfile
                        name="Kaisar Akhir"
                        position="Managing Director"
                        image={Profile4}
                        description="Experienced manager with a passion 
                        for building high-performing teams 
                        and developing talent."
                    />
                </div>
            </div>
            <div>
                <h1 className='text-center font-semibold text-4xl my-16'>Managers</h1>
                <div className="flex gap-20 -mx-2">
                    <CardProfile
                        name="M. Rifqi Suryanto"
                        position="HR and Operation Manager"
                        image={Profile5}
                        description="Results-oriented manager with a focus 
                        on creating experienced employees and 
                        enhancing organizational culture"
                    />
                    <CardProfile
                        name="Sanggam Tulus M. O. Gultom"
                        position="Creative Manager"
                        image={Profile6}
                        description="Results-oriented manager with a focus 
                        on creating experienced employees and 
                        enhancing organizational culture"
                    />
                </div>
            </div>
        </div>
    )
}

export default ProfileTeam
