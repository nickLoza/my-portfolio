import { BsLinkedin, BsGithub } from "react-icons/bs"

function Contact() {
	return (
		<section className="contact" id="contact">
				<h4 className="contact__title">Contact me</h4>
				<ul className="contact__ul">
					<div className="contact__ul-icons">
						<li className="contact__ul-li">
							<a className="contact__ul-link" href="https://www.linkedin.com/in/nicklozadev/" target="_blank">
			    				<BsLinkedin/>
			    			</a>
						</li>
					</div>
					<li className="contact__ul-li">
						<p className="contact__ul-p">
							nicklozadeveloper@gmail.com
						</p>
					</li>
				</ul>
			</section>
	)
}

export default Contact