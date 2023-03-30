import { BsLinkedin } from "react-icons/bs"

function Contact() {
	return (
		<section className="contact" id="contact" >
				<h5 className="contact__title" tabIndex={0}>Contact me</h5>
				<div className="contact__ul">
					<div className="contact__ul-icons">
						<a className="contact__ul-link" href="https://www.linkedin.com/in/nicklozadev/" target="_blank" aria-label="click to open linkedin profile">
			    				<BsLinkedin/>
			    		</a>
					</div>
					<p className="contact__ul-p"  tabIndex={0}>
							nicklozadeveloper@gmail.com
						</p>
				</div>
			</section>
	)
}

export default Contact