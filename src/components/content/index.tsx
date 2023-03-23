import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Tecnologies from "./Tecnologies";



function Content(){

	return(
		<div className="content">
			<div  className="content__img-bcg"/>
			<Projects/>
			<Tecnologies/>
			<AboutMe/>
		</div>
	)
}


export default Content;