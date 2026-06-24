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
                    		<a href="#" className="logo-footer"></a>
	                        <p>Integer congue elit non semper laoreet sed lectu orc posuer nisl tempor sed felis ac mauris ellent esque ndu ca urna Integer vitae felis.</p>
	                        <div className="footer-icons">
	                            <a href="#"><i className="fa fa-facebook-square fa-2x"></i></a>
	                            <a href="#"><i className="fa fa-google-plus-square fa-2x"></i></a>
	                            <a href="#"><i className="fa fa-twitter-square fa-2x"></i></a>
	                            <a href="#"><i className="fa fa-pinterest-square fa-2x"></i></a>
	                            <a href="#"><i className="fa fa-vimeo-square fa-2x"></i></a>
	                        </div>
	                        <a href="/quote" className="btn btn-lg btn-danger">GET A FREE QUOTE</a>
	                    </div>
	                    <div className="col-sm-2 wow zoomIn" data-wow-delay="0.3s" 
                        style={{
                            visibility: "visible",
                            animationDelay: "0.3s",
                            animationName: "zoomIn",
                          }}>
                        {/* style="visibility: visible; animation-delay: 0.3s; animation-name: zoomIn;"> */}
                    		<h4>WE OFFERS</h4>
	                        <nav>
                        		<a href="#">Sea Freight</a>
	                            <a href="#">Road Transportation</a>
	                            <a href="#">Air Freight</a>
	                            <a href="#">Railway Logistics</a>
	                            <a href="#">Packaging &amp; Storage</a>
	                            <a href="#">Warehousing</a>
	                        </nav>
	                    </div>
	                    <div className="col-sm-2 wow zoomIn" data-wow-delay="0.3s"
                        style={{
                            visibility: "visible",
                            animationDelay: "0.3s",
                            animationName: "zoomIn",
                          }}>
                        {/* style="visibility: visible; animation-delay: 0.3s; animation-name: zoomIn;"> */}
                    		<h4>MAIN LINKS</h4>
	                        <nav>
                        		<a href="01_home.html">Home</a>
	                            <a href="06_services.html">Our Services</a>
	                            <a href="04_about.html">About Us</a>
	                            <a href="07_services.html">News</a>
	                            <a href="10_blog.html">Shop</a>
	                            <a href="12_contact.html">Contact</a>
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
	                        Everyday is a new day for us and we work really hard to satisfy our customers everywhere.
	                        <div className="contact-info">
	                            <span><i className="fa fa-location-arrow"></i><strong>TRANSCARGO LTD.</strong><br/>3608 NewHill Station Ave CA, Newyork 33102 </span>
	                            <span><i className="fa fa-phone"></i>1.800.987.6543</span>
	                            <span><i className="fa fa-envelope"></i>info@domain.com   |   quote@domain.com</span>
	                            <span><i className="fa fa-clock-o"></i>Mon - Sat  8.00 - 19.00</span>
	                        </div>
	                    </div>
	                </div>
             		<div className="copy text-right"><a id="to-top" href="#this-is-top"><i className="fa fa-chevron-up"></i></a>Created by <a href="#">Templines</a> © 2015 TransCargo All rights reserved.</div>
	             </div>
	        </footer>
    )
}