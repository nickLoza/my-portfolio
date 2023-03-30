

function AboutMe(){


	return(
		<section className="about" id="about">
			<img src="https://i.postimg.cc/SxvbvqgC/profile.webp" className="about__img" alt="profile"/>
			<div className="about__text" tabIndex={0}>
				<h1 className="about__text-title">NICK LOZA</h1>
				<p className="about__text-description">I'm a front-end developer with a <b className="about__text-b">constant</b> interest in writing good code, learning new technologies and techniques to <b className="about__text-b">mutate</b> into a better programmer.
		    	</p>
			</div>
		</section>
		)
}


export default AboutMe;