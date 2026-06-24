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
                    <h2>FOR ALL YOUR CARGO NEEDS</h2>
                    <h1>TRANSCARGO - THE RIGHT CHOICE</h1>
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
                            THE MISSION
                        </a>
                    </li>
                    <li>
                        <a href="#tab3" data-toggle="tab">
                            OUR STRATEGY
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
                                        Sed mollis lorem ipsum dolor sit amet, consectetuer adipiscing
                                        elit vamus fringilla sed cipit mil sed hac habitasse platea
                                        dictumst pellentesque justo.
                                    </strong>
                                </p>
                                <p>
                                    Vivamus quis sapien. Etiam fring illatul Quisque consectetuer.
                                    Integer conguel elit non semper laoreet sed lectus orcid posuere
                                    nisl tempor lacus felis ac mauris. Pellentesque inedu urna. Integer
                                    lvitae felis. Vel magna posuere vestibulum. Nam rutrum congue diam.
                                </p>
                                <u>
                                    Aliquam malesuada mauris urk metus lorem ipsum dolor sit amet
                                    consectetur adipisicing
                                </u>
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
                                        Aliquam malesuada mauris urk metus lorem ipsum dolor sit amet
                                        consectetur adipisicingSed mollis lorem ipsum dolor sit amet,
                                        consectetuer adipiscing elit vamus fringilla sed cipit mil sed
                                        hac habitasse platea dictumst pellentesque justo.
                                    </strong>
                                </p>
                                <p>
                                    Vivamus quis sapien. Etiam fring illatul Quisque consectetuer.
                                    Integer conguel elit non semper laoreet sed lectus orcid posuere
                                    nisl tempor lacus felis ac mauris. Vel magna posuere vestibulum. Nam
                                    rutrum congue diam.
                                </p>
                                <u>
                                    Aliquam malesuada mauris urk metus lorem ipsum dolor sit amet
                                    consectetur adipisicing
                                </u>
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
                                        Vel magna posuere vestibulum. Nam rutrum congue diam.
                                    </strong>
                                </p>
                                <p>
                                    Vivamus quis sapien. Etiam fring illatul Quisque consectetuer.
                                    Integer conguel elit non semper laoreet sed lectus orcid posuere
                                    nisl tempor lacus felis ac mauris.Vel magna posuere vestibulum. Nam
                                    rutrum congue diam. Pellentesque inedu urna. Integer lvitae felis.
                                    Vel magna posuere vestibulum. Nam rutrum congue diam.
                                </p>
                                <u>
                                    Aliquam malesuada mauris urk metus lorem ipsum dolor sit amet
                                    consectetur adipisicing
                                </u>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row stats percent-blocks" data-waypoint-scroll="true">
                    <div className="col-sm-6 col-md-3">
                        <div className="chart" data-percent="230">
                            <span>
                                <i className="fa fa-folder-open"></i>
                            </span>
                            <span className="percent">230</span>
                            Projects Done
                            <canvas height="0" width="0"></canvas>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-3">
                        <div className="chart" data-percent="68">
                            <span>
                                <i className="fa fa-users"></i>
                            </span>
                            <span className="percent">68</span>
                            Clients Worldwide
                            <canvas height="0" width="0"></canvas>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-3">
                        <div className="chart" data-percent="147">
                            <span>
                                <i className="fa fa-truck"></i>
                            </span>
                            <span className="percent">147</span>
                            Owned Vehicles
                            <canvas height="0" width="0"></canvas>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-3">
                        <div className="chart" data-percent="105">
                            <span>
                                <i className="fa fa-male"></i>
                            </span>
                            <span className="percent">105</span>
                            People In Team
                            <canvas height="0" width="0"></canvas>
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
                        WE ARE DEDICATED TO PROVIDE THE BEST SERVICE <br /> AT THE LOWEST
                        POSSIBLE COST
                    </h1>

                   
                </div>
            </div>

            <div className="container-fluid block-content inner-offset">
                <div
                    className="hgroup text-center wow fadeInUp"
                    data-wow-delay="0.3s"
                    style={{
                        visibility: "visible",
                        animationDelay: "0.3s",
                        animationName: "fadeInUp",
                    }}
                >
                    <h1>MEET OUR TEAM</h1>
                    <h2>dedicated & professionals</h2>
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
            </div>
        </>
    )
}