export const About = () => {
    return (
        <>
            <div className="bg-image page-title">
                <div className="container-fluid">
                    <a href="#">
                        <h1>ABOUT US</h1>
                    </a>

                    <div className="pull-right">
                        <a href="01_home.html">
                            <i className="fa fa-home fa-lg"></i>
                        </a>{" "}
                        &nbsp;&nbsp;|&nbsp;&nbsp;{" "}
                        <a href="03_about.html">About Us</a>
                    </div>
                </div>
            </div>

            <div className="container-fluid inner-offset">
                <div
                    className="hgroup text-center wow zoomIn"
                    data-wow-delay="0.3s"
                    style={{
                        visibility: "visible",
                        animationDelay: "0.3s",
                        animationName: "zoomIn",
                    }}
                >
                    <h2>
                        FOR ALL YOUR COURIER & LOGISTICS NEEDS</h2>
                    <h1>BROAD PEAK GROUP LTD — THE RIGHT CHOICE</h1>
                </div>

                <ul
                    className="nav nav-tabs wow fadeIn"
                    data-wow-delay="0.3s"
                    id="myTab"
                    style={{
                        visibility: "visible",
                        animationDelay: "0.3s",
                        animationName: "fadeIn",
                    }}
                >
                    <li className="active">
                        <a href="#tab1" data-toggle="tab">
                            WHY CHOOSE US
                        </a>
                    </li>
                    <li>
                        <a href="#tab2" data-toggle="tab">
                        OUR MISSION
                        </a>
                    </li>
                    <li>
                        <a href="#tab3" data-toggle="tab">
                        OUR VALUES

                        </a>
                    </li>
                </ul>

                <div
                    className="tab-content inner-offset wow fadeIn"
                    data-wow-delay="0.3s"
                    style={{
                        visibility: "visible",
                        animationDelay: "0.3s",
                        animationName: "fadeIn",
                    }}
                >
                    <div className="tab-pane active" id="tab1">
                        <div className="row">
                            <div className="col-sm-5">
                                <img className="full-width" src="media/images/1.jpg" alt="Img" />
                            </div>
                            <div className="col-sm-7">
                                <p>
                                    <strong style={{ fontSize: "16px" }}>
                                    Broad Peak Group Ltd is a UK-based courier and logistics company based in Luton, providing same-day courier, dedicated van transport, pallet delivery, scheduled delivery, final mile delivery, small parcel delivery, warehouse storage, and business logistics support across the UK.
                                    </strong>
                                </p>
                                <p>
                                We focus on reliable collections, safe handling, clear communication, and professional delivery from start to finish.
                                </p>
                                {/* <u>
                                    Aliquam malesuada mauris urk metus lorem ipsum dolor sit amet
                                    consectetur adipisicing
                                </u> */}
                            </div>
                        </div>
                    </div>

                    <div className="tab-pane" id="tab2">
                        <div className="row">
                            <div className="col-sm-5">
                                <img className="full-width" src="media/images/1.jpg" alt="Img" />
                            </div>
                            <div className="col-sm-7 text-block">
                                <p>
                                    <strong>
                                    Our mission is to provide dependable, professional, and affordable courier and logistics services that help businesses move goods with confidence.
                                    </strong>
                                </p>
                                <p>
                                Whether it is an urgent parcel, pallet delivery, dedicated van load, or regular business transport, we aim to make every delivery smooth, secure, and on time.
                                </p>
                                
                            </div>
                        </div>
                    </div>

                    <div className="tab-pane" id="tab3">
                        <div className="row">
                            <div className="col-sm-5">
                                <img className="full-width" src="media/images/1.jpg" alt="Img" />
                            </div>
                            <div className="col-sm-7 text-block">
                                <p>
                                    <strong>
                                    We believe in reliability, professionalism, clear communication, and customer care.
                                    </strong>
                                </p>
                                <p>
                                Every delivery is handled with attention, respect, and a commitment to meeting customer expectations.
                                </p>
                               
                            </div>
                        </div>
                    </div>
                </div>

             
            </div>


            <div
                className="bg-image parallax"
                style={{
                    backgroundImage: "url(media/bg/4.jpg)",
                }}
            >
                <div
                    className="container-fluid text-center wow fadeInUp"
                    data-wow-delay="0.3s"
                    style={{
                        visibility: "visible",
                        animationDelay: "0.3s",
                        animationName: "fadeInUp",
                    }}
                >
                    <h1>
                    RELIABLE COURIER & LOGISTICS SUPPORT ACROSS THE UK
                    </h1>

                   
                </div>
            </div>

           
            {/* <div className="container-fluid block-content inner-offset">
                <div
                    className="hgroup text-center wow fadeInUp"
                    data-wow-delay="0.3s"
                    style={{
                        visibility: "visible",
                        animationDelay: "0.3s",
                        animationName: "fadeInUp",
                    }}
                >
                    <h1>OUR TEAM</h1>
                    <h2>PROFESSIONAL, RELIABLE & CUSTOMER FOCUSED</h2>
                </div>

                <div className="row main-grid team hover-eff">
                    <div
                        className="col-sm-4 wow fadeInLeft"
                        data-wow-delay="0.3s"
                        style={{
                            visibility: "visible",
                            animationDelay: "0.3s",
                            animationName: "fadeInLeft",
                        }}
                    >
                        <div
                            className="userpic"
                            style={{
                                backgroundImage: "url(media/our-team/1.jpg)",
                            }}
                        >
                            <span style={{ display: "none" }}>
                                Integer congue elit non semper laore du lectus orc posuer nisl
                                tempor lacus fel sed elite nisal mauris led Lorem ipsum dolor sit
                                amet consectetur
                            </span>
                        </div>

                        <div className="user-info">
                            <small>Managing Director</small>
                            <h4>JOHN DEO</h4>
                        </div>

                        <a href="#" className="btn btn-sm btn-success">
                            SEND EMAIL
                        </a>

                        <div className="soc-icons">
                            <a style={{ color: "#005394" }} href="#">
                                <i className="fa fa-facebook-square fa-lg"></i>
                            </a>
                            <a style={{ color: "#ff054f" }} href="#">
                                <i className="fa fa-google-plus-square fa-lg"></i>
                            </a>
                            <a style={{ color: "#47aeff" }} href="#">
                                <i className="fa fa-twitter-square fa-lg"></i>
                            </a>
                            <a style={{ color: "#b50000" }} href="#">
                                <i className="fa fa-pinterest-square fa-lg"></i>
                            </a>
                        </div>
                    </div>

                    <div
                        className="col-sm-4 wow fadeInUp"
                        data-wow-delay="0.3s"
                        style={{
                            visibility: "visible",
                            animationDelay: "0.3s",
                            animationName: "fadeInUp",
                        }}
                    >
                        <div
                            className="userpic"
                            style={{
                                backgroundImage: "url(media/our-team/2.jpg)",
                            }}
                        >
                            <span style={{ display: "none" }}>
                                Integer congue elit non semper laore du lectus orc posuer nisl
                                tempor lacus fel sed elite nisal mauris led Lorem ipsum dolor sit
                                amet consectetur
                            </span>
                        </div>

                        <div className="user-info">
                            <small>Managing Director</small>
                            <h4>JOHN DEO</h4>
                        </div>

                        <a href="#" className="btn btn-sm btn-success">
                            SEND EMAIL
                        </a>

                        <div className="soc-icons">
                            <a style={{ color: "#005394" }} href="#">
                                <i className="fa fa-facebook-square fa-lg"></i>
                            </a>
                            <a style={{ color: "#ff054f" }} href="#">
                                <i className="fa fa-google-plus-square fa-lg"></i>
                            </a>
                            <a style={{ color: "#47aeff" }} href="#">
                                <i className="fa fa-twitter-square fa-lg"></i>
                            </a>
                            <a style={{ color: "#b50000" }} href="#">
                                <i className="fa fa-pinterest-square fa-lg"></i>
                            </a>
                        </div>
                    </div>

                    <div
                        className="col-sm-4 wow fadeInRight"
                        data-wow-delay="0.3s"
                        style={{
                            visibility: "visible",
                            animationDelay: "0.3s",
                            animationName: "fadeInRight",
                        }}
                    >
                        <div
                            className="userpic"
                            style={{
                                backgroundImage: "url(media/our-team/3.jpg)",
                            }}
                        >
                            <span style={{ display: "none" }}>
                                Integer congue elit non semper laore du lectus orc posuer nisl
                                tempor lacus fel sed elite nisal mauris led Lorem ipsum dolor sit
                                amet consectetur
                            </span>
                        </div>

                        <div className="user-info">
                            <small>Managing Director</small>
                            <h4>JOHN DEO</h4>
                        </div>

                        <a href="#" className="btn btn-sm btn-success">
                            SEND EMAIL
                        </a>

                        <div className="soc-icons">
                            <a style={{ color: "#005394" }} href="#">
                                <i className="fa fa-facebook-square fa-lg"></i>
                            </a>
                            <a style={{ color: "#ff054f" }} href="#">
                                <i className="fa fa-google-plus-square fa-lg"></i>
                            </a>
                            <a style={{ color: "#47aeff" }} href="#">
                                <i className="fa fa-twitter-square fa-lg"></i>
                            </a>
                            <a style={{ color: "#b50000" }} href="#">
                                <i className="fa fa-pinterest-square fa-lg"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid partners block-content">
                <div
                    className="hgroup title-space wow fadeInLeft"
                    data-wow-delay="0.3s"
                    style={{
                        visibility: "visible",
                        animationDelay: "0.3s",
                        animationName: "fadeInLeft",
                    }}
                >
                    <h1>TRUSTED partners</h1>
                    <h2>Lorem ipsum dolor sit amet consectetur</h2>
                </div>

                <div
                    id="partners"
                    className="owl-carousel enable-owl-carousel owl-theme"
                    data-pagination="false"
                    data-navigation="true"
                    data-min450="2"
                    data-min600="2"
                    data-min768="4"
                    style={{
                        opacity: 1,
                        display: "block",
                    }}
                >
                    <div className="owl-wrapper-outer">
                        <div className="owl-wrapper">
                            <div className="owl-item">
                                <div
                                    className="wow rotateIn"
                                    data-wow-delay="0.3s"
                                    style={{
                                        visibility: "visible",
                                        animationDelay: "0.3s",
                                        animationName: "rotateIn",
                                    }}
                                >
                                    <a href="#">
                                        <img src="media/partners/1.png" alt="Img" />
                                    </a>
                                </div>
                            </div>

                            <div className="owl-item">
                                <div
                                    className="wow rotateIn"
                                    data-wow-delay="0.3s"
                                    style={{
                                        visibility: "visible",
                                        animationDelay: "0.3s",
                                        animationName: "rotateIn",
                                    }}
                                >
                                    <a href="#">
                                        <img src="media/partners/2.png" alt="Img" />
                                    </a>
                                </div>
                            </div>

                            <div className="owl-item">
                                <div
                                    className="wow rotateIn"
                                    data-wow-delay="0.3s"
                                    style={{
                                        visibility: "visible",
                                        animationDelay: "0.3s",
                                        animationName: "rotateIn",
                                    }}
                                >
                                    <a href="#">
                                        <img src="media/partners/3.png" alt="Img" />
                                    </a>
                                </div>
                            </div>

                            <div className="owl-item">
                                <div
                                    className="wow rotateIn"
                                    data-wow-delay="0.3s"
                                    style={{
                                        visibility: "visible",
                                        animationDelay: "0.3s",
                                        animationName: "rotateIn",
                                    }}
                                >
                                    <a href="#">
                                        <img src="media/partners/4.png" alt="Img" />
                                    </a>
                                </div>
                            </div>

                            <div className="owl-item">
                                <div
                                    className="wow rotateIn"
                                    data-wow-delay="0.3s"
                                    style={{
                                        visibility: "visible",
                                        animationDelay: "0.3s",
                                        animationName: "rotateIn",
                                    }}
                                >
                                    <a href="#">
                                        <img src="media/partners/1.png" alt="Img" />
                                    </a>
                                </div>
                            </div>

                            <div className="owl-item">
                                <div
                                    className="wow rotateIn"
                                    data-wow-delay="0.3s"
                                    style={{
                                        visibility: "visible",
                                        animationDelay: "0.3s",
                                        animationName: "rotateIn",
                                    }}
                                >
                                    <a href="#">
                                        <img src="media/partners/2.png" alt="Img" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="owl-controls clickable">
                        <div className="owl-buttons">
                            <div className="owl-prev">
                                <i className="fa fa-angle-left"></i>
                            </div>
                            <div className="owl-next">
                                <i className="fa fa-angle-right"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}