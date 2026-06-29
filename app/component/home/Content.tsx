
import { Slider } from "./Slider"

export const Content = () => {

    return (
        <>
        <Slider/>
            <div className="container-fluid">
                <div className="row column-info block-content">
                    <div className="col-sm-4 col-md-4 col-lg-4 wow fadeInLeft" data-wow-delay="3.3s" style={{
                        visibility: "visible",
                        animationDelay: "1.3s",
                        animationName: "fadeInLeft",
                    }}>
                        <img src="media/vancard/vancard1.jpeg" alt="slider" />
                        <span></span>
                        <h3>SAME DAY DELIVERY</h3>
                        <p>Fast and reliable same-day delivery across the UK.</p>
                    </div>
                    <div className="col-sm-4 col-md-4 col-lg-4 wow fadeInUp" data-wow-delay="3.3s" style={{
                        visibility: "visible",
                        animationDelay: "1.3s",
                        animationName: "fadeInUp",
                    }}>
                        <img src="media/vancard/vancard2.jpeg" alt="Img" />
                        <span></span>
                        <h3>DEDICATED TRANSPORT</h3>
                        <p>Your own vehicle, direct to destination, every time.</p>
                    </div>
                    <div className="col-sm-4 col-md-4 col-lg-4 wow fadeInRight" data-wow-delay="3.3s" style={{
                        visibility: "visible",
                        animationDelay: "1.3s",
                        animationName: "fadeInRight",
                    }}>
                        <img src="media/vancard/vancard3.jpeg" alt="Img" />
                        <span></span>
                        <h3>BUSINESS LOGISTICS</h3>
                        <p>Tailored logistics solutions to keep your business moving efficiently and cost-effectively.</p>
                    </div>
                </div>
            </div>


            <div className="big-hr color-1 wow zoomInUp" data-wow-delay="0.3s" style={{
                visibility: "visible",
                animationDelay: "0.3s",
                animationName: "zoomInUp",
            }}>
                <div className="text-left" style={{ marginRight: "40px" }}>
                    <h2>WE PROVIDE FASTEST & AFFORDABLE COURIER & LOGISTICS SERVICES.</h2>
                    <p>Reliable. Professional. On Time—Every Time.</p>
                </div>
                <div><a className="btn btn-success btn-lg" href="/quote">REQUEST A FREE QUOTE</a></div>
            </div>


            <div className="container-fluid block-content">
                <div className="text-center hgroup wow zoomInUp" data-wow-delay="0.3s" style={{
                    visibility: "visible",
                    animationDelay: "0.3s",
                    animationName: "zoomInUp",
                }}>
                    <h1>OUR SERVICES</h1>
                    <h2>WE HAVE WIDE NETWORK OF OFFICES IN ALL MAJOR LOCATIONS TO HELP YOU WITH THE SERVICES WE OFFER</h2>
                </div>
                <div className="row our-services">
                    <div className="col-sm-6 col-md-3 col-lg-3 wow zoomInLeft" data-wow-delay="0.3s" style={{
                        visibility: "visible",
                        animationDelay: "0.3s",
                        animationName: "zoomInLeft",
                    }}>
                        <a href="/quote">
                        <span><i className="glyph-icon flaticon-package7"></i></span>
                            <h4>SAME DAY COURIER</h4>
                            <p style={{fontSize:"10px", lineHeight:"1"}}>Fast and reliable same-day delivery across the UK.</p>
                        </a>
                    </div>
                    <div className="col-sm-6 col-md-3 col-lg-3 wow zoomInUp" data-wow-delay="0.3s" style={{
                        visibility: "visible",
                        animationDelay: "0.3s",
                        animationName: "zoomInUp",
                    }}>
                        <a href="/quote">
                            <span><i className="fa fa-truck fa-3x"></i></span>
                            <h4>DEDICATED TRANSPORT</h4>
                            <p style={{fontSize:"10px", lineHeight:"1"}}>Your own vehicle, direct to destination, every time.</p>
                        </a>
                    </div>
                    <div className="col-sm-6 col-md-3 col-lg-3 wow zoomInRight" data-wow-delay="0.3s" style={{
                        visibility: "visible",
                        animationDelay: "0.3s",
                        animationName: "zoomInRight",
                    }}>
                        <a href="/quote">
                            <span><i className="glyph-icon flaticon-garage1"></i></span>
                            <h4>BUSINESS LOGISTICS</h4>
                            <p style={{fontSize:"10px", lineHeight:"1"}}>Smart logistics solutions to support your business.</p>
                        </a>
                    </div>
                    <div className="col-sm-6 col-md-3 col-lg-3 wow zoomInLeft" data-wow-delay="0.3s" style={{
                        visibility: "visible",
                        animationDelay: "0.3s",
                        animationName: "zoomInLeft",
                    }}>
                        <a href="/quote">
                            <span><i className="glyph-icon flaticon-traffic-signal"></i></span>
                            <h4>NATIONWIDE COVERAGE</h4>
                            <p style={{fontSize:"10px", lineHeight:"1"}}>Extensive network across the UK for complete coverage.</p>
                        </a>
                    </div>
                 
                </div>
            </div>


            <div className="fleet-gallery block-content bg-image inner-offset">
                <div className="container-fluid inner-offset">
                    <div
                        className="text-center hgroup wow zoomInUp"
                        data-wow-delay="0.3s"
                        style={{
                            visibility: "visible",
                            animationDelay: "0.3s",
                            animationName: "zoomInUp",
                        }}
                    >
                        <h1>THE FLEETS GALLERY</h1>
                        <h2>we always use best & fastest fleets</h2>
                    </div>

                    <div
                        id="fleet-gallery"
                        className="owl-carousel enable-owl-carousel owl-theme"
                        data-pagination="false"
                        data-navigation="false"
                        data-min450="2"
                        data-min600="2"
                        data-min768="4"
                        style={{
                            opacity: 1,
                            display: "block",
                        }}
                    >
                        <div className="owl-wrapper-outer">
                            <div
                                className="owl-wrapper"
                                style={{
                                    width: "3420px",
                                    left: "0px",
                                    display: "block",
                                    transition: "all",
                                    transform: "translate3d(0px, 0px, 0px)",
                                }}
                            >
                                <div className="owl-item" style={{ width: "285px" }}>
                                    <div
                                        className="wow rotateIn"
                                        data-wow-delay="0.3s"
                                        style={{
                                            visibility: "visible",
                                            animationDelay: "0.3s",
                                            animationName: "rotateIn",
                                        }}
                                    >
                                        <img src="media/vancard/vancard4.jpeg" alt="Img" />
                                    </div>
                                </div>

                                <div className="owl-item" style={{ width: "285px" }}>
                                    <div
                                        className="wow rotateIn"
                                        data-wow-delay="0.3s"
                                        style={{
                                            visibility: "visible",
                                            animationDelay: "0.3s",
                                            animationName: "rotateIn",
                                        }}
                                    >
                                        <img src="media/vancard/vancard5.jpeg" alt="Img" />
                                    </div>
                                </div>

                                <div className="owl-item" style={{ width: "285px" }}>
                                    <div
                                        className="wow rotateIn"
                                        data-wow-delay="0.3s"
                                        style={{
                                            visibility: "visible",
                                            animationDelay: "0.3s",
                                            animationName: "rotateIn",
                                        }}
                                    >
                                        <img src="media/vancard/vancard6.jpeg" alt="Img" />
                                    </div>
                                </div>

                                <div className="owl-item" style={{ width: "285px" }}>
                                    <div
                                        className="wow rotateIn"
                                        data-wow-delay="0.3s"
                                        style={{
                                            visibility: "visible",
                                            animationDelay: "0.3s",
                                            animationName: "rotateIn",
                                        }}
                                    >
                                        <img src="media/vancard/vancard1.jpeg" alt="Img" />
                                    </div>
                                </div>

                                <div className="owl-item" style={{ width: "285px" }}>
                                    <div
                                        className="wow rotateIn"
                                        data-wow-delay="0.3s"
                                        style={{
                                            visibility: "visible",
                                            animationDelay: "0.3s",
                                            animationName: "rotateIn",
                                        }}
                                    >
                                        <img src="media/fleet-gallery/1.png" alt="Img" />
                                    </div>
                                </div>

                                <div className="owl-item" style={{ width: "285px" }}>
                                    <div
                                        className="wow rotateIn"
                                        data-wow-delay="0.3s"
                                        style={{
                                            visibility: "visible",
                                            animationDelay: "0.3s",
                                            animationName: "rotateIn",
                                        }}
                                    >
                                        <img src="media/fleet-gallery/2.png" alt="Img" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="owl-controls clickable">
                            <div className="owl-buttons">
                                {/* <div className="owl-prev">
                                    <i className="fa fa-angle-left"></i>
                                </div>
                                <div className="owl-next">
                                    <i className="fa fa-angle-right"></i>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div
                className="container-fluid block-content percent-blocks"
                data-waypoint-scroll="true"
            >
                <div className="row stats">
                    <div className="col-sm-6 col-md-3 col-lg-3">
                        <div className="chart" data-percent="80">
                            <span>
                                <i className="fa fa-folder-open"></i>
                            </span>
                            <span className="percent">80</span>
                            Projects Done
                            <canvas height="0" width="0"></canvas>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-3 col-lg-3">
                        <div className="chart" data-percent="23">
                            <span>
                                <i className="fa fa-users"></i>
                            </span>
                            <span className="percent">23</span>
                            Clients Worldwide
                            <canvas height="0" width="0"></canvas>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-3 col-lg-3">
                        <div className="chart" data-percent="12">
                            <span>
                                <i className="fa fa-truck"></i>
                            </span>
                            <span className="percent">12</span>
                            Owned Vehicles
                            <canvas height="0" width="0"></canvas>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-3 col-lg-3">
                        <div className="chart" data-percent="10">
                            <span>
                                <i className="fa fa-male"></i>
                            </span>
                            <span className="percent">10</span>
                            People In Team
                            <canvas height="0" width="0"></canvas>
                        </div>
                    </div>
                </div>
            </div>



          
        </>

    )
} 