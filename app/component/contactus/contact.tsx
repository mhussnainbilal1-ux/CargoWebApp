"use client";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import toast from "react-hot-toast";
export const Contact = () => {
    const [loading, setLoading] = useState(false);
    const [progress, setProgress] = useState(0);
    const [errors, setErrors] = useState("");

    const validateForm = (form: any) => {
        let newErrors: string = "";

        const name = form["user-name"].value.trim();
        const email = form["user-email"].value.trim();
        const phone = form["user-phone"].value.trim();
        const message = form["user-message"].value.trim();

        if (!name) newErrors = "Name is required";

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) newErrors = "Email is required";

        if (phone && phone.length < 7) newErrors = "Phone number is not correct";

        if (!phone) newErrors = "Phone is required";

        if (!message) newErrors = "Message is required";

        setErrors(newErrors);
          
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const form = e.target;

        // ✅ validation only
        if (!validateForm(form)) return;

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
                    firstName: form["user-name"].value,
                    lastName: form["user-lastname"].value,
                    email: form["user-email"].value,
                    phone: form["user-phone"].value,
                    subject: form["user-subject"].value,
                    message: form["user-message"].value,
                },
                "c4V7U_p68TYPVEWoU"
            );

            clearInterval(interval);
            setProgress(100);
            toast.success("Message sent successfully!");
            setTimeout(() => {
                form.reset();
                setLoading(false);
                setProgress(0);
                setErrors("");
            }, 400);

        } catch (error) {
            clearInterval(interval);
            console.log(error);
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
                                        <input type="text" name="user-name" placeholder="Full Name" />
                                    </div>

                                    <div className="default-inp form-elem">
                                        <i className="fa fa-envelope"></i>
                                        <input type="text" name="user-email" placeholder="Email Address" />
                                    </div>
                                </div>

                                <div className="col-sm-6 form-elem">
                                    <div className="default-inp form-elem">
                                        <i className="fa fa-user"></i>
                                        <input type="text" name="user-lastname" placeholder="Last Name" />
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