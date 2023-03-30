
import profileUrl from "../../assets/images/profile.png" 


function AboutMe(){


	return(
		<section className="about" id="about">
			<img src={profileUrl} className="about__img" alt="profile"/>
			<div className="about__text" tabIndex={0}>
				<h2 className="about__text-title">I'm Nick Loza</h2>
				<p className="about__text-description">I'm a front-end developer with a <b className="about__text-b">constant</b> interest in writing good code, learning new technologies and techniques to <b className="about__text-b">mutate</b> into a better programmer.
		    	</p>
			</div>
		</section>
		)
}


export default AboutMe;