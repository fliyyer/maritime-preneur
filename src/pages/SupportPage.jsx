import React from 'react'
import Footer from '../component/Footer'
import NavBar from '../component/Navbar'
import Card from '../component/Supportpage/CardSupport'
import HeaderSupport from '../component/Supportpage/HeaderSupport'

const SupportPage = () => {

    const cards = [
        {
            title: 'Company Profile',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys',
            download: '#'
        },
        {
            title: 'Indonesia - Law of the Sea',
            description: 'Aliquam erat volutpat. Aenean pretium purus at neque pretium, in vestibulum sapien fermentum.',
            download: '#'
        },
        {
            title: 'Indonesian Ocean Policy',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys',
            download: '#'
        },
        {
            title: 'Blue Economy Company Index',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys',
            download: '#'
        }
    ];

    return (
        <div>
            <NavBar />
            <HeaderSupport />
            <div className="container my-8 mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {cards.map((card, index) => (
                    <Card key={index} title={card.title} description={card.description} download={card.download} />
                ))}
            </div>
            <Footer />
        </div>
    )
}

export default SupportPage
