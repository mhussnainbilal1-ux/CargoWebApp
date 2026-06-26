"use client";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import toast from "react-hot-toast";
export const Contact = () => {
    const [loading, setLoading] = useState(false);
    const [progress, setProgress] = useState(0);
    const [errors, setErrors] = useState("");

    const validateForm = (form: HTMLFormElement) => {
        const formData = new FormData(form);
    
        const name = String(formData.get("user-name") || "").trim();
        const email = String(formData.get("user-email") || "").trim();
        const phone = String(formData.get("user-phone") || "").trim();
        const message = String(formData.get("user-message") || "").trim();
    
        let error = "";
    
        if (!name) {
            error = "Name is required";
        } else if (!email) {
            error = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            error = "Please enter a valid email";
        } else if (!phone) {
            error = "Phone is required";
        } else if (phone.length < 7) {
            error = "Phone number is not correct";
        } else if (!message) {
            error = "Message is required";
        }
    
        setErrors(error);
    
        return error === "";
    };
    
    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();
    
        const form = e.currentTarget;
    
        if (!validateForm(form)) return;
    
        const formData = new FormData(form);
    
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
                    firstName: formData.get("user-name"),
                    lastName: formData.get("user-lastname"),
                    email: formData.get("user-email"),
                    contact: formData.get("user-phone"),
                    subject: formData.get("user-subject"),
                    message: formData.get("user-message"),
                },
                "c4V7U_p68TYPVEWoU"
            );
    
            clearInterval(interval);
            setProgress(100);
    
            toast.success("Message sent successfully!");
    
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

    return (
        <>
            <div className="bg-image page-title">
                <div className="container-fluid">
                    <a href="#">
                        <h1>road transportation</h1>
                    </a>

                    <div className="pull-right">
                        <a href="01_home.html">
                            <i className="fa fa-home fa-lg"></i>
                        </a>{" "}
                        &nbsp;&nbsp;|&nbsp;&nbsp;{" "}
                        <a href="#">Contact us</a>
                    </div>
                </div>
            </div>

            <div className="container-fluid block-content">
                <div className="row main-grid">

                    <div className="col-sm-4">
                        <h4>Head Office</h4>
                        <p>
                            Everyday is a new day for us and we work really hard to satisfy our customers everywhere.
                        </p>

                        <div className="adress-details wow fadeInLeft">
                            <div>
                                <span><i className="fa fa-location-arrow"></i></span>
                                <div>
                                    <strong>TRANSCARGO LTD.</strong>
                                    <br />
                                    3608 NewHill Station Ave CA, Newyork 33102
                                </div>
                            </div>

                            <div>
                                <span><i className="fa fa-phone"></i></span>
                                <div>1.800.987.6543</div>
                            </div>

                            <div>
                                <span><i className="fa fa-envelope"></i></span>
                                <div>quote@domain.com</div>
                            </div>

                            <div>
                                <span><i className="fa fa-clock-o"></i></span>
                                <div>Mon - Sat 8.00 - 19.00</div>
                            </div>
                        </div>

                        <br /><br /><hr /><br />

                        <h4>Branch Office</h4>

                        <div className="adress-details wow fadeInLeft">
                            <div>
                                <span><i className="fa fa-location-arrow"></i></span>
                                <div>
                                    <strong>TRANSCARGO LTD.</strong>
                                    <br />
                                    3608 NewHill Station Ave CA, Newyork 33102
                                </div>
                            </div>

                            <div>
                                <span><i className="fa fa-phone"></i></span>
                                <div>1.800.987.6543</div>
                            </div>

                            <div>
                                <span><i className="fa fa-envelope"></i></span>
                                <div>quote@domain.com</div>
                            </div>

                            <div>
                                <span><i className="fa fa-clock-o"></i></span>
                                <div>Mon - Sat 8.00 - 19.00</div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-8 wow fadeInRight">
                        <h4>SEND us a message</h4>

                        <p>
                            Integer congue elit noin semper laoreet sed lectus orcil posuer nisal tempor se felis acm.
                        </p>
                        <p style={{color:"red"}}>
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

                        <form onSubmit={handleSubmit} id="contactForm" className="reply-form form-inline" noValidate>

                            <div className="row form-elem">

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

                            <div className="default-inp form-elem">
                                <input type="text" name="user-subject" placeholder="Subject" />
                            </div>

                            <div className="form-elem default-inp">
                                <textarea name="user-message" placeholder="Message"></textarea>
                            </div>

                            <div className="form-elem">
                                <button
                                    type="submit"
                                    className="btn btn-success btn-default"
                                    disabled={loading}
                                >
                                    {loading ? "Sending..." : "Send Message"}
                                </button>
                            </div>

                        </form>

                    </div>
                </div>
            </div>
        </>
    );
};