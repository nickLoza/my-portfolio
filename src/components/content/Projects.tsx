 import projectsDB from "../../projects/projectsDB";
import { TfiWorld } from "react-icons/tfi";
import { AiOutlineGithub } from "react-icons/ai";





function Projects(){

	return(
		<section className="projects" id="projects" role="main">
			<h2 className="projects__title" tabIndex={0}>MY PROJECTS</h2>
			<div className="projects__list">
				{projectsDB.map((proj)=>(
					<div key={proj.id} className="projects__item item" tabIndex={0}>
						<img 
							className="item__img" 
							title={proj.title} 
							src={proj.imgUrl} 
							alt={proj.title}/>
						<div className="item__links" >
							<a 
								href={proj.websiteLink} 
								target="_blank" 
								className="item__link" 
								aria-label={`click to open ${proj.title} website`}>
						<TfiWorld/>
						</a>
						<a 
							href={proj.repositoryLink} 
							target="_blank" 
							className="item__link" 
							aria-label={`click to open ${proj.title} repository`}>
							<AiOutlineGithub/>
						</a>
						</div>
						<p className="item__title">{proj.title}</p>
						<p className="item__description">{proj.description}</p>
					</div>
				))}
			</div>
		</section>
	)
}

export default Projects;