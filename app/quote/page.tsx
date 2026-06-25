"use client";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import toast from "react-hot-toast";
export default function Quote() {
    const [loading, setLoading] = useState(false);
    const [progress, setProgress] = useState(0);
    const [errors, setErrors] = useState("");

    return (
        <>



            <div className="bg-image page-title">
                <div className="container-fluid">
                    <a href="#">
                        <h1>QUOTE</h1>
                    </a>

                    <div className="pull-right">
                        <a href="01_home.html">
                            <i className="fa fa-home fa-lg"></i>
                        </a>{" "}
                        &nbsp;&nbsp;|&nbsp;&nbsp;{" "}
                        <a href="/quote">GET A FREE QUOTE</a>
                    </div>
                </div>
            </div>

            <div className="container-fluid block-content">
                <div className="row main-grid"> <div className="col-sm-12 wow fadeInRight">
                <h4>Get a quote online
                        </h4>
                        <div className="row form-elem" style={{
                            backgroundColor: "#a91605",
                            marginRight: "0px",
                            marginLeft: "0px",
                            borderRadius: "8px",
                            padding: "20px 12px 20px 12px"
                        }}>
                            <div className="col-sm-12 form-elem">


                            </div>
                            {/* LEFT SIDE */}
                            <div className="col-sm-12 col-md-3 form-elem">

                                <div className="default-inp form-elem">
                                    <i className="fa fa-location-arrow"></i>
                                    <input type="text" name="user-name" placeholder="Pickup" />
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-3 form-elem">

                                <div className="default-inp form-elem">
                                    <i className="fa fa-map-marker"></i>
                                    <input type="text" name="user-name" placeholder="Destination" />
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-4 form-elem">

                                <div className="default-inp form-elem">
                                    <i className="fa fa-envelope"></i>
                                    <input type="text" name="user-name" placeholder="Email" />
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-2 form-elem">

                                <div className="form-elem">
                                <button style={{width:"100%"}}
                                    type="submit"
                                    className="btn btn-success btn-default"
                                    disabled={loading}
                                >
                                    {loading ? "Submitting..." : "Get a Quote"}
                                </button>
                                </div>
                            </div>
                        </div>
<br/><br/><br/>
                        <h4>Can’t find what your looking for? Please use the form below to contact us.
                        </h4>
                        <p>
                            Please note, by using our contact form you are automatically opting in to be contacted via email.
                        </p>
                        <p style={{ color: "red" }}>
                            {errors}
                        </p>

                        {loading && (
                            <div style={{
                                width: "100%",
                                background: "#eee",
                                height: "6px",
                                borderRadius: "4px",
                                overflow: "hidden",
                                marginBottom: "10px"
                            }}>
                                <div
                                    style={{
                                        width: `${progress}%`,
                                        height: "100%",
                                        background: "#2c3e50",
                                        transition: "width 0.2s ease"
                                    }}
                                />
                            </div>
                        )}

                        <form id="contactForm" className="reply-form form-inline" noValidate>

                            <div className="row form-elem">
                                <br />
                                <div className="col-sm-12 form-elem">

                                    <u><h4>Your Detail</h4></u>
                                </div>
                                {/* LEFT SIDE */}
                                <div className="col-sm-6 form-elem">

                                    <div className="default-inp form-elem">
                                        <i className="fa fa-user"></i>
                                        <input type="text" name="user-name" placeholder="First Name" />
                                    </div>
                                    <div className="default-inp form-elem">
                                        <i className="fa fa-user"></i>
                                        <input type="text" name="user-lastname" placeholder="Last Name" />
                                    </div>


                                </div>

                                {/* RIGHT SIDE */}
                                <div className="col-sm-6 form-elem">

                                    <div className="default-inp form-elem">
                                        <i className="fa fa-envelope"></i>
                                        <input type="text" name="user-email" placeholder="Email Address" />
                                    </div>
                                    <div className="default-inp form-elem">
                                        <i className="fa fa-phone"></i>
                                        <input type="text" name="user-phone" placeholder="Phone No." />
                                    </div>
                                </div>
                            </div>

                            <div className="row form-elem">
                                <br />
                                <div className="col-sm-12 form-elem">
                                    <u><h4>Collection Address</h4></u>
                                </div>
                                <div className="col-sm-12 form-elem">

                                    <div className="default-inp form-elem">
                                        <i className="fa fa-building"></i>
                                        <input type="text" name="user-name" placeholder="Building Name/Number" />
                                    </div>
                                    <div className="default-inp form-elem">
                                        <i className="fa fa-map-marker"></i>
                                        <input type="text" name="user-lastname" placeholder="Postcode" />
                                    </div>
                                    <div className="form-elem default-inp ">
                                        <textarea
                                            name="message"
                                            placeholder="Further Instructions"
                                        ></textarea>
                                    </div>
                                </div>
                            </div>
                            {/* CONTACT SECTION */}
                            <div className="row form-elem">
                                <br />
                                <div className="col-sm-12 form-elem">
                                    <u> <h4>Delivery Address</h4></u>
                                </div>
                                <div className="col-sm-12 form-elem">

                                    <div className="default-inp form-elem">
                                        <i className="fa fa-building"></i>
                                        <input type="text" name="user-name" placeholder="Building Name/Number" />
                                    </div>
                                    <div className="default-inp form-elem">
                                        <i className="fa fa-map-marker"></i>
                                        <input type="text" name="user-lastname" placeholder="Postcode" />
                                    </div>
                                    <div className="form-elem default-inp">
                                        <textarea
                                            name="message"
                                            placeholder="Further Instructions"
                                        ></textarea>
                                    </div>
                                </div>
                            </div>

                            {/* SUBMIT */}
                            <div className="form-elem">
                                <button
                                    type="submit"
                                    className="btn btn-success btn-default"
                                    disabled={loading}
                                >
                                    {loading ? "Submitting..." : "Get Quote"}
                                </button>
                            </div>

                        </form>

                    </div>
                </div>
            </div>
            <br />
            <br />
            <div className="block-content inner-offset" style={{marginBottom:"-50px"}}>
            <div
                className="big-hr color-2 wow zoomInUp"
                data-wow-delay="0.3s"
                style={{
                    visibility: "visible",
                    animationDelay: "0.3s",
                    animationName: "zoomInUp",
                }}
            >
                <div
                    className="text-left"
                    style={{ marginRight: "40px" }}
                >
                    <h2>WE PROVIDE FASTEST &amp; AFFORDABLE CARGO SERVICES</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt
                    </p>
                </div>

                {/* <div>
                    <a className="btn btn-danger btn-lg" href="#">
                        REQUEST A FREE QUOTE
                    </a>
                </div> */}
            </div>
  <div
    className="info-texts wow fadeIn"
    data-wow-delay="0.3s"
    style={{
      visibility: "visible",
      animationDelay: "0.3s",
      animationName: "fadeIn",
    }}
  >
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-4 col-md-4 col-lg-4">
          <p>
            We have wide network of offices in all major locations to help you
            with the services we offer
          </p>
        </div>

        <div className="col-sm-4 col-md-4 col-lg-4">
          <p>
            With the help of our worldwide partners we are providing
            specialized services in Logistics solutions to our satisfied
            customers
          </p>
        </div>

        <div className="col-sm-4 col-md-4 col-lg-4">
          <p>
            We provides comprehensive cargo care, cargo movement &amp; project
            management
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
          
        </>
    );
};