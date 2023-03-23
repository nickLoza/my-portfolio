import { BsLinkedin, BsGithub } from "react-icons/bs"


function AboutMe(){


	return(
		<div className="about" id="about">
			<div className="about__text">
				<h2 className="about__text-title">I'm Nick Loza</h2>
		    	<p className="about__text-description">I'm a front-end developer with a <b className="about__text-b">constant</b> interest in writing good code, learning new tecnologies and techniques to <b className="about__text-b">mutate</b> into a better programmer.
		    	</p>
			</div>
			<div className="about__contact">
				<ul className="about__contact-ul">
					<li className="about__contact-li">
						<a className="about__contact-link" href="https://github.com/nickLoza" target="_blank">
		    				<BsGithub/>
		    			</a>
					</li>
					<li className="about__contact-li">
						<a className="about__contact-link" href="https://www.linkedin.com/in/nicklozadev/" target="_blank">
		    				<BsLinkedin/>
		    			</a>
					</li>
					<li className="about__contact-li">
						<p className="about__contact-p">
							nicklozadeveloper@gmail.com
						</p>
					</li>
				</ul>
			</div>
		</div>
		)
}


export default AboutMe;