 import projectsDB from "../../projects/projectsDB";






function Projects(){

	return(
		<div className="projects" id="projects">
			<h2 className="projects__title">My projects</h2>
			<div className="projects__list">
				{projectsDB.map((proj)=>(
					<div key={proj.id} className="projects__item item">
						<p className="item__title">{proj.title}</p>
						<img src={proj.imgUrl} alt={proj.title}/>
						<div className="item__links">
							<a href={proj.websiteLink} target="_blank" className="item__link">
						Website
						</a>
						<a href={proj.repositoryLink} target="_blank" className="item__link">
							Repository
						</a>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Projects;