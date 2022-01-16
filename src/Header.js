import React from 'react'

export const Header = () => {
    return (
        <header>
            <div className="container main-hero-container">
                <div className="row">
                    <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start order-lg-first order-last">
                        <h1 className="display-2">Online Payment Made <br />  Easy for You</h1>
                        <p className="main-hero-para">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea debitis ratione aperiam, laborum expedita a consectetur cupiditate qui magni? Nobis officia quaerat incidunt a, ex numquam sint omnis dignissimos molestiae.
                        </p>
                        <h3>Get Early Access for You</h3>
                        <div className="input-group mt-3">
                            <input type="text" className="rounded-pill w-75 me-3 p2 form-control-text" placeholder="Enter Your Email" />
                            <div className="input-group-button">
                                Get it Now
                            </div>
                        </div>
                    </div>

                    {/* Main Header */}
                    <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-hero-section-image order-md-first order-sm-last">

                        <img src="./images/hero1.jpg" alt="hero img" className="img-fluid" />
                        <img src="./images/hero4.jpg" alt="hero img 4" className="img-fluid main-hero-img2" />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;