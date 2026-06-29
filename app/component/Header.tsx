"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export const Header = () => {
const [logoMargin,setLogoMargin]= useState(0);
const [bigScreen,setBigScreen]= useState(false);
	useEffect(()=>{
		if (window.innerWidth > 768) {
			setLogoMargin(-32);
			setBigScreen(true);
		}
		if (window.innerWidth <= 768) {
			setLogoMargin(4);
			setBigScreen(false);
		}
	},[])

	return (
		<>

			<header id="this-is-top">
				<div className="container-fluid">
					{
					bigScreen ?
						<div className="topmenu row">
						<nav className="col-sm-offset-3 col-md-offset-4 col-lg-offset-4 col-sm-6 col-md-5 col-lg-5">
							{/* <a href="#">BUY NOW</a>
	                        <a href="doc.html">read documentation</a>
	                        <a href="#">WHY US</a> */}
						</nav>
						<nav className="text-right col-sm-3 col-md-3 col-lg-3">
							<a href="#"><i className="fa fa-facebook"></i></a>
							<a href="#"><i className="fa fa-google-plus"></i></a>
							<a href="#"><i className="fa fa-twitter"></i></a>
							<a href="#"><i className="fa fa-pinterest"></i></a>
							<a href="#"><i className="fa fa-youtube"></i></a>
						</nav>
					</div>:<></>
					}
					
					<div className="row header">
					<div className={bigScreen ?"col-sm-3 col-md-3 col-lg-3":""} style={{marginTop:`${logoMargin}px`, marginBottom:bigScreen?"0px":"-60px"}}>
						
								<Image
									src="/logo2.png"
									alt="Logo"
									width={bigScreen?200:100}
									height={bigScreen?100:50}
									priority
								/>
						</div>
						{
							bigScreen ?
								<div className="col-sm-offset-1 col-md-offset-1 col-lg-offset-1 col-sm-8 col-md-8 col-lg-8">
									<div className="text-right header-padding">
										<div className="h-block"><span>CALL US</span>+44 20 7946 0958</div>
										<div className="h-block"><span>EMAIL US</span>info@broadpeakgroup.co.uk</div>
										<div className="h-block"><span>WORKING HOURS</span>Mon - Sat  8.00 - 19.00</div>
										<a className="btn btn-success" href="/quote">GET A FREE QUOTE</a>
									</div>
								</div> : <></>
						}
						
					</div>
					<div id="main-menu-bg"></div>
					<a id="menu-open" href="#"><i className="fa fa-bars"></i></a>
					{Navbar()}
					<a id="menu-close" href="#"><i className="fa fa-times"></i></a>
				</div>
			</header>
		</>
	)
}



export default function Navbar() {
	const closeMenu = () => {
		if (window.innerWidth <= 768) {
			document.getElementById("menu-close")?.click();
		}
	};

	return (
		<nav className="main-menu navbar-main-slide">
			<ul className="nav navbar-nav navbar-main">

				<li>
					<Link href="/" onClick={() => {
						closeMenu();
						window.location.assign("/");
					}}>Home</Link>
				</li>
				<li>
					<Link href="/services" onClick={() => closeMenu()}>Services</Link>
				</li>
				<li>
					<Link href="/aboutus" onClick={() => closeMenu()}>About</Link>
				</li>

				<li>
					<Link href="/contactus" onClick={() => closeMenu()}>CONTACT</Link>
				</li>
				<li>
					<Link href="/quote" onClick={() => closeMenu()}>Get a Quote</Link>
				</li>
			</ul>
		</nav>
	);
}