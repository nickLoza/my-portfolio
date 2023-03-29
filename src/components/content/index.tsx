import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Projects from "./Projects";
import Technologies from "./Technologies";



function Content(){

	return(
		<div className="content">
			<div  className="content__img-bcg"/>
			<AboutMe/>
			<Projects/>
			<Technologies/>
			<Contact/>
		</div>
	)
}


export default Content;