import React, { useState } from 'react'
import serviceApi from "./Api/serviceApi"
import Navbar from './Navbar';
import Footer from './Footer';

const Services = () => {

    const [serviceData, setServiceData] = useState(serviceApi)

    return (
        <>
            <section className="service-main-container">
                <div className="container service-container">
                    <h1 className="main-heading text-center fw-bold">
                        How to send money
                    </h1>
                    <div className="row">

                        {
                            serviceData.map((currElm) => {
                                const { id, logo, title, info } = currElm;
                                return <>
                                    <div key={id}
                                        className="col-11 col-lg-4 col-xxl-4 work-container-subdiv">
                                        <i className={`fontawesome-style ${logo}`}></i>
                                        <h2 className="sub-heading">{title} </h2>
                                        <p className="main-hero-para"> {info} </p>
                                    </div>
                                </>
                            })
                        }

                    </div>
                </div>
            </section>
        </>
    )
}

export default Services;