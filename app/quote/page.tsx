"use client";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
export default function Quote() {
    const [loading, setLoading] = useState(false);
    const [progress, setProgress] = useState(0);
    const [errors1, setErrors1] = useState("");
    const [errors, setErrors] = useState("");
    
    const [success, setSuccess]= useState(false);
    const [form1Data, setForm1Data] = useState({
        pickup: "",
        destination: "",
        email: "",
      });

      const [form2Data, setForm2Data] = useState({
        firstName: "",
        lastName: "",
        email: "",
        contact:"",
        collectionAddress: "",
        collectionPostCode: "",
        collectionInstructions: "",
        deliveryAddress: "",
        deliveryPostCode: "",
        deliveryInstructions: "",
      });

    const handleChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
        setErrors1("")
        setForm1Data((prev) => ({
          ...prev,
          [e.target.name]: e.target.value,
        }));
      };

      const handleChange2 = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
       
        setForm2Data((prev) => ({
          ...prev,
          [e.target.name]: e.target.value,
        }));
      };
    
     
    
    const handleSubmit1 = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();
    
        const form = e.currentTarget;
        if (!form1Data.pickup || !form1Data.destination || !form1Data.email) {
            setErrors1("* Pickup, destination and email are required");
            return;
        }
    
        setLoading(true);
        setProgress(10);
    
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev < 80) return prev + 10;
                return prev;
            });
        }, 200);
    
        try {
            await emailjs.send(
                "service_g6681ty",
                "template_7us4o2l",
                {
                    pickup:form1Data.pickup,
                    destination: form1Data.destination,
                    email: form1Data.email,
                },
                "c4V7U_p68TYPVEWoU"
            );
    
            clearInterval(interval);
            setProgress(100);
    
            toast.success("Message sent successfully!");
            Swal.fire({
                icon: "success",
                title: "Request Submitted!",
                text: "Thank you! We've received your enquiry and will contact you shortly.",
                confirmButtonText: "OK",
                confirmButtonColor: "#16a34a",
                background: "#fff",
              });
            setForm1Data({
                pickup: "",
                destination: "",
                email: "",
              })
            setTimeout(() => {
                form.reset();
                setErrors("");
                setLoading(false);
                setProgress(0);
            }, 400);
    
        } catch (error) {
            clearInterval(interval);
            console.error(error);
    
            toast.error("Failed to send message");
            
            setLoading(false);
            setProgress(0);
        }
    };


    const handleSubmit2 = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();
    
        const { firstName, lastName, email,
             contact, collectionAddress, collectionPostCode, collectionInstructions
            , deliveryAddress, deliveryPostCode, deliveryInstructions } = form2Data;
        if (!firstName) {
            setErrors("First name is required");
            return;
        }else if (!lastName) {
            setErrors("Last name is required"); return;
        } else if (!email) {
            setErrors( "Email is required"); return;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setErrors("Please enter a valid email"); return;
        } else if (!contact) {
            setErrors("Phone is required"); return;
        } else if (contact.length < 7) {
            setErrors("Phone number is not correct"); return;
        } else if (!collectionAddress) {
            setErrors("Collection address is required"); return;

        } else if (!collectionPostCode) {
            setErrors("Collection postCode is required"); return;
        } else if (!collectionInstructions) {
            setErrors("Collection instructions are required"); return;

        }else if (!deliveryAddress) {
            setErrors("Delivery address is required"); return;
        } else if (!deliveryPostCode) {
            setErrors("Delivery postCode is required"); return;
       
        } else if (!deliveryInstructions) {
            setErrors("Delivery instructions are required"); return;
        }
    
        setLoading(true);
        setProgress(10);
    
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev < 80) return prev + 10;
                return prev;
            });
        }, 200);
    
        try {
            await emailjs.send(
                "service_g6681ty",
                "template_ty2tzrc",
                {
                    firstName, lastName, email, contact,
                    collectionAddress, collectionPostCode, collectionInstructions,
                    deliveryAddress, deliveryPostCode, deliveryInstructions
                },
                "c4V7U_p68TYPVEWoU"
            );
    
            clearInterval(interval);
            setProgress(100);
    
            toast.success("Message sent successfully!");
            Swal.fire({
                icon: "success",
                title: "Request Submitted!",
                text: "Thank you! We've received your enquiry and will contact you shortly.",
                confirmButtonText: "OK",
                confirmButtonColor: "#16a34a",
                background: "#fff",
              });
            setForm1Data({
                pickup: "",
                destination: "",
                email: "",
              })
            setTimeout(() => {
                setForm2Data({
                    firstName: "",
                    lastName: "",
                    email: "",
                    contact:"",
                    collectionAddress: "",
                    collectionPostCode: "",
                    collectionInstructions: "",
                    deliveryAddress: "",
                    deliveryPostCode: "",
                    deliveryInstructions: "",
                  })
                setErrors("");
                setLoading(false);
                setProgress(0);
            }, 400);
    
        } catch (error) {
            clearInterval(interval);
            console.error(error);
    
            toast.error("Failed to send message");
    
            setLoading(false);
            setProgress(0);
        }
    };
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
                            padding: "10px 12px 20px 12px"
                        }}>
                             <form onSubmit={handleSubmit1}>
                            <div className="col-sm-12 form-elem">


                            </div>
                            {/* LEFT SIDE */}
                           
                            <div className="col-sm-12 col-md-3 form-elem">

                                <div className="default-inp form-elem">
                                    <i className="fa fa-location-arrow"></i>
                                    <input type="text" name="pickup" placeholder="Pickup"
                                    value={form1Data.pickup}
                                    onChange={handleChange1}
                                     />
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-3 form-elem">

                                <div className="default-inp form-elem">
                                    <i className="fa fa-map-marker"></i>
                                    <input type="text" 
                                    value={form1Data.destination}
                                    onChange={handleChange1}
                                     name="destination" placeholder="Destination" />
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-4 form-elem">

                                <div className="default-inp form-elem">
                                    <i className="fa fa-envelope"></i>
                                    <input type="text" name="email" placeholder="Email"  value={form1Data.email}
                                    onChange={handleChange1}
                                    />
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
                            {
                               errors1? <div className="col-sm-12 form-elem">
                               <p style={{color:"white"}}>
                                   {errors1}
                                   </p>
                               </div>  :<></>
                            }
                            
                            </form>
                        </div>
                        
<br/><br/><br/>
                        <h4>Can’t find what your looking for? Please use the form below to contact us.
                        </h4>
                        <p>
                            Please note, by using our contact form you are automatically opting in to be contacted via email.
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

                        <form onSubmit={handleSubmit2} className="reply-form form-inline">

                            <div className="row form-elem">
                                <br />
                                <div className="col-sm-12 form-elem">

                                    <u><h4>Your Detail</h4></u>
                                </div>
                                {/* LEFT SIDE */}
                                <div className="col-sm-6 form-elem">

                                    <div className="default-inp form-elem">
                                        <i className="fa fa-user"></i>
                                        <input type="text" value={form2Data.firstName} name="firstName" onChange={handleChange2} placeholder="First Name" />
                                    </div>
                                    <div className="default-inp form-elem">
                                        <i className="fa fa-user"></i>
                                        <input type="text" name="lastName" value={form2Data.lastName} onChange={handleChange2} placeholder="Last Name" />
                                    </div>


                                </div>

                                {/* RIGHT SIDE */}
                                <div className="col-sm-6 form-elem">

                                    <div className="default-inp form-elem">
                                        <i className="fa fa-envelope"></i>
                                        <input type="text" name="email" value={form2Data.email} onChange={handleChange2} placeholder="Email Address" />
                                    </div>
                                    <div className="default-inp form-elem">
                                        <i className="fa fa-phone"></i>
                                        <input type="text" name="contact" value={form2Data.contact} onChange={handleChange2} placeholder="Phone No." />
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
                                        <input type="text" name="collectionAddress" value={form2Data.collectionAddress} onChange={handleChange2} placeholder="Building Name/Number" />
                                    </div>
                                    <div className="default-inp form-elem">
                                        <i className="fa fa-map-marker"></i>
                                        <input type="text" name="collectionPostCode" value={form2Data.collectionPostCode} onChange={handleChange2} placeholder="Postcode" />
                                    </div>
                                    <div className="form-elem default-inp ">
                                        <textarea
                                            name="collectionInstructions"
                                            value={form2Data.collectionInstructions}
                                            onChange={handleChange2}
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
                                        <input type="text" name="deliveryAddress" value={form2Data.deliveryAddress} onChange={handleChange2} placeholder="Building Name/Number" />
                                    </div>
                                    <div className="default-inp form-elem">
                                        <i className="fa fa-map-marker"></i>
                                        <input type="text" name="deliveryPostCode" value={form2Data.deliveryPostCode} onChange={handleChange2} placeholder="Postcode" />
                                    </div>
                                    <div className="form-elem default-inp">
                                        <textarea
                                            name="deliveryInstructions"
                                            value={form2Data.deliveryInstructions}
                                            onChange={handleChange2}
                                            placeholder="Further Instructions"
                                        ></textarea>
                                    </div>
                                </div>
                            </div>
                            <p style={{ color: "red" }}>
                            {errors}
                        </p>

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