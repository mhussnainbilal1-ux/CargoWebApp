import Image from "next/image";
import Link from "next/link";
export const Footer=()=>{
    return(
        <footer>
        		<div className="color-part2"></div>
        		<div className="color-part"></div>
        		<div className="container-fluid">
            		<div className="row block-content">
               			<div className="col-sm-4 wow zoomIn" data-wow-delay="0.3s" 
                           style={{
                            visibility: "visible",
                            animationDelay: "0.3s",
                            animationName: "zoomIn",
                          }}>
                           {/* style="visibility: visible; animation-delay: 0.3s; animation-name: zoomIn;"> */}
                    		{/* <a href="#" className="logo-footer"></a> */}
							<Image
									src="/logo2.png"
									alt="Logo"
									width={200}
									height={100}
									priority
								/>
	                        <p>Broad Peak Group Ltd provides reliable same day courier, dedicated transport and business logistics solutions across the UK.</p>
	                        {/* <div className="footer-icons">
	                            <a href="#"><i className="fa fa-facebook-square fa-2x"></i></a>
	                            <a href="#"><i className="fa fa-google-plus-square fa-2x"></i></a>
	                            <a href="#"><i className="fa fa-twitter-square fa-2x"></i></a>
	                            <a href="#"><i className="fa fa-pinterest-square fa-2x"></i></a>
	                            <a href="#"><i className="fa fa-vimeo-square fa-2x"></i></a>
	                        </div> */}
	                        <a href="/quote" className="btn btn-lg btn-danger">GET A FREE QUOTE</a>
	                    </div>
	                   
	                    <div className="col-sm-2 wow zoomIn" data-wow-delay="0.3s"
                        style={{
                            visibility: "visible",
                            animationDelay: "0.3s",
                            animationName: "zoomIn",
                          }}>
                    		<h4>MAIN LINKS</h4>
	                        <nav>
							
				<li>
					<Link href="/services" >Services</Link>
				</li>
				<li>
					<Link href="/aboutus">About</Link>
				</li>

				<li>
					<Link href="/contactus" >CONTACT</Link>
				</li>
				<li>
					<Link href="/quote" >Get a Quote</Link>
				</li>
	                        </nav>
	                    </div>
	                    <div className="col-sm-4 wow zoomIn" data-wow-delay="0.3s" 
                        style={{
                            visibility: "visible",
                            animationDelay: "0.3s",
                            animationName: "zoomIn",
                          }}
                        // style="visibility: visible; animation-delay: 0.3s; animation-name: zoomIn;"
                        >

							
                    		<h4>CONTACT INFO</h4>
							Same Day Courier, Dedicated Transport, Business Logistics, Nationwide Coverage.
	                        <div className="contact-info">
	                            <span><i className="fa fa-location-arrow"></i><strong>Broad Peak Group Ltd.</strong><br/>Unit 7, Luton Business Park, Luton, Bedfordshire,<br/> LU1 1AA </span>
	                            <span><i className="fa fa-phone"></i>+44 20 7946 0958</span>
	                            <span><i className="fa fa-envelope"></i>info@broadpeakgroup.co.uk</span>
	                            <span><i className="fa fa-clock-o"></i>Mon - Sat  8.00 - 19.00</span>
	                        </div>
	                    </div>
	                </div>
             		<div className="copy text-right"><a id="to-top" href="#this-is-top"><i className="fa fa-chevron-up"></i></a> © 2025 Broad Peak Group Ltd. All Rights Reserved.</div>
	             </div>
	        </footer>
    )
}