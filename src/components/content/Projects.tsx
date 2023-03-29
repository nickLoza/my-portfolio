 import projectsDB from "../../projects/projectsDB";
import { TfiWorld } from "react-icons/tfi";
import { AiOutlineGithub } from "react-icons/ai";





function Projects(){

	return(
		<section className="projects" id="projects">
			<h1 className="projects__title">My projects</h1>
			<div className="projects__list">
				{projectsDB.map((proj)=>(
					<div key={proj.id} className="projects__item item">
						<p className="item__title">{proj.title}</p>
						<img className="item__img" src={proj.imgUrl} alt={proj.title}/>
						<div className="item__links" >
							<a href={proj.websiteLink} target="_blank" className="item__link">
						<TfiWorld/>
						</a>
						<a href={proj.repositoryLink} target="_blank" className="item__link">
							<AiOutlineGithub/>
						</a>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}

export default Projects;