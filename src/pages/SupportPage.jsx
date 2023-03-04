import React from 'react'
import Footer from '../component/Footer'
import NavBar from '../component/Navbar'
import HeaderSupport from '../component/Supportpage/HeaderSupport'
import Pdf2 from '../../src/assets/pdf/pdf2.pdf'
import Pdf3 from '../../src/assets/pdf/pdf3.pdf'
import Pdf4 from '../../src/assets/pdf/pdf4.pdf'
import CardSupport from '../component/Supportpage/CardSupport'

const SupportPage = () => {


    return (
        <div>
            <NavBar />
            <HeaderSupport />
            <div className="container my-8 mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <CardSupport
                    title='Company Profile'
                    desk='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys'
                    pdf={Pdf2} />
                <CardSupport
                    title='Indonesia - Law of the Sea'
                    desk='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys'
                    pdf={Pdf2} />
                <CardSupport
                    title='Indonesian Ocean Policy'
                    desk='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys'
                    pdf={Pdf3} />
                <CardSupport
                    title='Blue Economy Company Index'
                    desk='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys'
                    pdf={Pdf4} />
            </div>
            <Footer />
        </div>
    )
}

export default SupportPage
