import React, { useState } from 'react'
import workApi from './Api/workApi';

const HowItWorks = () => {

    const [workData, setWorkData] = useState(workApi);

    return (
        <>
            <section>
                <div className="work-container container">
                    <h1 className="main-heading text-center">How does it works</h1>
                    <div className="row">

                        {
                            workData.map((currElm) => {
                                const { id, logo, title, info } = currElm;
                                return <>
                                    <div className="col-12 col-lg-4 text-center work-container-sub-div" key={id}>
                                        <i className={`fontawesome-style ${logo}`}></i>
                                        <h2 className="sub-heading">{title}</h2>
                                        <div className="main-hero-para w-100">
                                            {info}
                                        </div>
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

export default HowItWorks;