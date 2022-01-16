import React, { useState } from 'react'
import howToUseApp from './Api/howToUse';

const AboutUs = () => {

    const [aboutData, setAboutData] = useState(howToUseApp);
    console.log(aboutData)
    return (
        <>
            <section className="common-section our-services">
                <div className="container mb-5">
                    <div className="row">
                        <div className="col-12 col-lg-5 text-center">
                            <img src="./images/hero3.jpg" alt="Hero Image" className="our-service-leftside-img" />
                        </div>
                        <div className="col-12 col-lg-7 our-services-list">
                            <h3 className="mini-title">Available @google and apple store only</h3>
                            <h1 className="main-heading">How to Use the App</h1>

                            {
                                aboutData.map((currElm) => {
                                    return <>
                                        <div className="row our-services-info" key={currElm.id} >
                                            <div className="col-1 our-services-number">{currElm.id}</div>
                                            <div className="col-10 our-services-data">
                                                <h2>{currElm.title}</h2>
                                                <p className="main-hero-para">{currElm.info}</p>
                                            </div>
                                        </div>
                                    </>
                                })
                            }


                            <br />
                            <button className="btn-style btn-style-border">learn more</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2nd part of about us section  */}

            <section className="common-section our-services our-services-rightside">
                <div className="container mb-5">
                    <div className="row">
                        <div className="col-12 col-lg-7 our-services-rightside-content">
                            <h3 className="mini-title">Support in all languages</h3>
                            <h1 className="main-heading">World class support <br /> 24/7 available </h1>

                            {
                                aboutData.map((currElm) => {
                                    return <>
                                        <div className="row our-services-info" key={currElm.id} >
                                            <div className="col-1 our-services-number">{currElm.id}</div>
                                            <div className="col-10 our-services-data">
                                                <h2>{currElm.title}</h2>
                                                <p className="main-hero-para">{currElm.info}</p>
                                            </div>
                                        </div>
                                    </>
                                })
                            }


                            <br />
                            <button className="btn-style btn-style-border">learn more</button>
                        </div>

                        <div className="col-12 col-lg-5 text-start">
                            <img src="./images/callcenter.jpg" alt="Hero Image" className="our-service-rightside-img" />
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutUs;
