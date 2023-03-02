import React from 'react'
import Team from '../../assets/team.png'

const HeaderTeam = () => {
    return (
        <div className="bg-cover bg-center min-h-screen flex justify-center items-center team-hero">
            <div className="container mx-auto px-4 py-8 items-center flex flex-col md:flex-row">
                <div className="md:w-1/2 md:pr-8">
                    <p className="text-primary-color font-bold text-3xl mb-4">Discover our team <br /> of professionals</p>
                    <p className="text-primary-color text-lg mb-8">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla auctor ipsum eget
                        massa sagittis ullamcorper. Aliquam erat volutpat. Aenean pretium purus at neque
                        pretium, in vestibulum sapien fermentum. Integer euismod nisl sed velit fermentum
                        volutpat. Duis maximus nulla vel lacus rhoncus, in volutpat arcu congue.
                    </p>
                </div>
                <div className="md:w-1/2">
                    <img className="rounded-lg " src={Team} alt="gambar" />
                </div>
            </div>
        </div>
    )
}

export default HeaderTeam
