"use client";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
export default function Quote() {
    const [loading, setLoading] = useState(false);
    const [progress, setProgress] = useState(0);
    
    const [errors, setErrors] = useState("");
    const [suggestions, setSuggestions] = useState<string[]>([]);

    const [delPostcode, setDelPostcode] = useState<string[]>([]);

      const [formData, setFormData] = useState({
        fullName: "",
        companyName: "",
        phoneNumber: "",
        emailAddress:"",
        collectionPostCode: "",
        deliveryPostCode: "",
        collectionDate:"",
        collectionTime:"",
        deliveryDate:"",
        deliveryTime:"",
        itemDescription:"",
        approxSize:"",
        approxWeight:"",
        vehicleRequired:"",
        additionalNotes: "",
      });

      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
       setErrors("")
        setFormData((prev) => ({
          ...prev,
          [e.target.name]: e.target.value,
        }));
      };
    
     
    
   const getSuggestions = async (query: string) => {
  if (query.length < 2) return [];

  const res = await fetch(
    `https://api.postcodes.io/postcodes/${encodeURIComponent(query)}/autocomplete`
  );

  const data = await res.json();

  return data.result || [];
};

const handlePostcodeChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    handleChange(e); // your existing function
  
    const value = e.target.value;
    if (value.length < 2) {
      setSuggestions([]);
      return;
    }
  
    const results = await getSuggestions(value);
    setSuggestions(results);
  };

  const handleDelPostcodeChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    handleChange(e); // your existing function
  
    const value = e.target.value;
    if (value.length < 2) {
        setDelPostcode([]);
      return;
    }
  
    const results = await getSuggestions(value);
    setDelPostcode(results);
  };


    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();
    
        const { 
        fullName,
        companyName,
        phoneNumber,
        emailAddress,
        collectionPostCode,
        deliveryPostCode,
        collectionDate,
        collectionTime,
        deliveryDate,
        deliveryTime,
        itemDescription,
        approxSize,
        approxWeight,
        vehicleRequired,
        additionalNotes,
         } = formData;
        if (!fullName) {
            setErrors("Full name is required");
            return;
        }else if (!companyName) {
            setErrors("Company name is required"); return;
        } else if (!emailAddress) {
            setErrors( "Email is required"); return;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress)) {
            setErrors("Please enter a valid email"); return;
        } else if (!phoneNumber) {
            setErrors("Phone is required"); return;
        } else if (phoneNumber.length < 7) {
            setErrors("Phone number is not correct"); return;
        } else if (!collectionDate) {
            setErrors("Collection date is required"); return;
        } else if (!collectionTime) {
            setErrors("Collection time is required"); return;
        } else if (!deliveryDate) {
            setErrors("Delivery date is required"); return;
        }
        // else if (!itemDescription) {
        //     setErrors("Item description is required"); return;
        // }
        else if (!approxSize) {
            setErrors("Size is required"); return;
        }
        else if (!approxWeight) {
            setErrors("Weight is required"); return;
        }
        else if (!collectionPostCode) {
            setErrors("Collection postCode is required"); return;
        } else if (!vehicleRequired) {
            setErrors("Vehicle required is required"); return;
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
                    fullName,
                    companyName,
                    phoneNumber,
                    emailAddress,
                    collectionPostCode,
                    deliveryPostCode,
                    collectionDate,
                    collectionTime,
                    deliveryDate,
                    deliveryTime,
                    itemDescription,
                    approxSize,
                    approxWeight,
                    vehicleRequired,
                    additionalNotes,
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

            setTimeout(() => {
                setFormData({
                    fullName: "",
                    companyName: "",
                    phoneNumber: "",
                    emailAddress:"",
                    collectionPostCode: "",
                    deliveryPostCode: "",
                    collectionDate:"",
                    collectionTime:"",
                    deliveryDate:"",
                    deliveryTime:"",
                    itemDescription:"",
                    approxSize:"",
                    approxWeight:"",
                    vehicleRequired:"",
                    additionalNotes: "",
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

                        <form onSubmit={handleSubmit} className="reply-form form-inline">

                            <div className="row form-elem">
                                <br />
                               
                                {/* LEFT SIDE */}
                                <div className="col-sm-6 form-elem">
                                <label>Your Detail</label>
                                    <div className="default-inp form-elem">
                                        <i className="fa fa-user"></i>
                                        <input type="text" value={formData.fullName} name="fullName" onChange={handleChange} placeholder="Full Name" />
                                    </div>
                                    <div className="default-inp form-elem">
                                        <i className="fa fa-building"></i>
                                        <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} placeholder="Company Name" />
                                    </div>
                                    <div className="default-inp form-elem">
                                        <i className="fa fa-phone"></i>
                                        <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Phone Number" />
                                    </div>
                                    <div className="default-inp form-elem">
                                        <i className="fa fa-envelope"></i>
                                        <input type="text" name="emailAddress" value={formData.emailAddress} onChange={handleChange} placeholder="Email Address" />
                                    </div>
                                   
                                    <br/><br/>
                                <label htmlFor="collectionDate">Collection Date</label>
                                    <div className="default-inp form-elem">
                                    <input
                                        type="date"
                                        name="collectionDate"
                                        value={formData.collectionDate}
                                        onChange={handleChange}
                                        onClick={(e) => {
                                            const input = e.currentTarget;
                                            if (input.showPicker) {
                                                input.showPicker();
                                            }
                                        }}
                                    />
                                </div>
                                <div className="default-inp form-elem">
                                    <i className="fa fa-clock-o"></i>
                                    <input type="text" name="collectionTime" value={formData.collectionTime} onChange={handleChange} placeholder="Collection Time" />
                                </div>
                                <div className="default-inp form-elem">
                                    <i className="fa fa-map-marker"></i>
                                    <input type="text" name="collectionPostCode" value={formData.collectionPostCode} 
                                    onChange={handlePostcodeChange} placeholder="Collection Postcode" />
                                    {suggestions.length > 0 && (
                                        <ul className="postcode-dropdown">
                                            {suggestions.map((item) => (
                                                <li
                                                    key={item}
                                                    onClick={() => {
                                                        setFormData((prev) => ({
                                                            ...prev,
                                                            collectionPostCode: item,
                                                        }));
                                                        setSuggestions([]);
                                                    }}
                                                >
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                                
<br/><br/>
                                <label htmlFor="deliveryDate">Delivery Date</label>
                                <div className="default-inp form-elem">
                                    <input
                                        type="date"
                                        name="deliveryDate"
                                        value={formData.deliveryDate}
                                        onChange={handleChange}
                                        onClick={(e) => {
                                            const input = e.currentTarget;
                                            if (input.showPicker) {
                                                input.showPicker();
                                            }
                                        }}
                                    />
                                </div>
                                <div className="default-inp form-elem">
                                    <i className="fa fa-clock-o"></i>
                                    <input type="text" name="deliveryTime" value={formData.deliveryTime} onChange={handleChange} placeholder="Delivery Time" />
                                </div>
                                <div className="default-inp form-elem">
                                    <i className="fa fa-map-marker"></i>
                                    <input type="text" 
                                    name="deliveryPostCode" 
                                    value={formData.deliveryPostCode} 
                                    onChange={handleDelPostcodeChange}
                                    placeholder="Delivery Postcode" />
                                    {delPostcode.length > 0 && (
                                        <ul className="postcode-dropdown">
                                            {delPostcode.map((item) => (
                                                <li
                                                    key={item}
                                                    onClick={() => {
                                                        setFormData((prev) => ({
                                                            ...prev,
                                                            deliveryPostCode: item,
                                                        }));
                                                        setDelPostcode([]);
                                                    }}
                                                >
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                              
                            </div>

                            {/* RIGHT SIDE */}
                            <div className="col-sm-6 form-elem">

                                <label>Items(s) Detail</label>
                                <div className="default-inp form-elem">
                                <i className="fa fa-arrows-alt"></i>
                                
                                    <input type="text" name="approxSize" value={formData.approxSize} onChange={handleChange} placeholder="Approximate Size" />
                                </div>
                                <div className="default-inp form-elem">
                                    <i className="fa fa-balance-scale"></i>
                                    <input type="text" name="approxWeight" value={formData.approxWeight} onChange={handleChange} placeholder="Approximate Weight" />
                                </div>
                                <div className="default-inp form-elem">
                                    <div className="form-elem default-inp">
                                        <textarea name="itemDescription" value={formData.itemDescription} onChange={handleChange} placeholder="Item Description" />
                                    </div>
                                </div>
                                
                                <div className="default-inp form-elem">
                                    <div className="form-elem default-inp">
                                        <textarea name="additionalNotes" value={formData.additionalNotes} onChange={handleChange} placeholder="Additional Notes" />
                                    </div>
                                </div>
                                <br/>
                                <label>Vehicle(s) Detail </label>
                                <div className="default-inp form-elem">
                                    <textarea name="vehicleRequired" value={formData.vehicleRequired} onChange={handleChange} placeholder="Required Vehicle" />
                                </div>
                            </div>
                        </div>


                        {/* SUBMIT */}
                        <div className="form-elem" >
                            <button
                                style={{width:"100%"}}
                                    type="submit"
                                    className="btn btn-success btn-default"
                                    disabled={loading}
                                >
                                    {loading ? "Submitting..." : "Get Quote"}
                                </button>
                            </div>
                            <div className="form-elem" >
                            <p style={{ color: "red" }}>
                            {errors}
                        </p>
                        </div>
                        </form>

                    </div>
                </div>
            </div>
            <br />
            <br />
            <div className="block-content inner-offset" style={{marginBottom:"-50px"}}>
          
 
</div>
          
        </>
    );
};