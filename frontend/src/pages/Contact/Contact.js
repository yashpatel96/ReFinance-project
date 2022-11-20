import React from "react";
import { useDocumentTitle } from "../../components/layouts/Title/Title";

const Contact = () => {
	useDocumentTitle("- Contact");
	return (
		<div>
			<h4 align="center">Contact Us</h4>
                            <ul>
                                <li><a href="https://www.google.com/maps/place/University+of+Regina/@50.4154542,-104.5900189,17z/data=!3m1!4b1!4m5!3m4!1s0x531ea090798fa7ab:0x47e1c32f9f870c24!8m2!3d50.4154542!4d-104.5878302"><span class="fa fa-map-marker"></span>3737 Wascana Pkwy, Regina, SK S4S 0A2</a></li>
                                <li><a href="mailto:contact@refinance.ca"><span class="fa fa-envelope"></span>contact@refinance.ca</a></li>
                                <li><span class="fa fa-mobile"></span>+1-306-333-9999</br></li>
                                
                            </ul>
		</div>
	);	
};

export default Contact;
