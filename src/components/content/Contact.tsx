import { BsLinkedin, BsGithub } from "react-icons/bs"

function Contact() {
	return (
		<section className="contact" id="contact" >
				<h4 className="contact__title" tabIndex={0}>Contact me</h4>
				<ul className="contact__ul">
					<div className="contact__ul-icons">
						<li className="contact__ul-li">
							<a className="contact__ul-link" href="https://www.linkedin.com/in/nicklozadev/" target="_blank" aria-label="click to open linkedin profile">
			    				<BsLinkedin/>
			    			</a>
						</li>
					</div>
					<li className="contact__ul-li">
						<p className="contact__ul-p"  tabIndex={0}>
							nicklozadeveloper@gmail.com
						</p>
					</li>
				</ul>
			</section>
	)
}

export default Contact