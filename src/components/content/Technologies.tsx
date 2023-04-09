


import { DiCss3, DiHtml5,DiJsBadge,DiReact,DiSass, DiNpm,DiGit,DiNodejsSmall } from "react-icons/di";
import { SiTypescript, SiTestinglibrary } from "react-icons/si";


function Technologies() {


	return (
		<section className="technologies" id="technologies" >
			<h3 className="technologies__title" tabIndex={0}>
			Technologies I've been using:
			</h3>
			<div className="technologies__icons">
				<DiHtml5 className="technologies__icon" title="HTML"  tabIndex={0}/>
				<DiCss3 className="technologies__icon" title="CSS"  tabIndex={0}/>
				<DiSass className="technologies__icon" title="SASS"  tabIndex={0}/>
				<DiJsBadge className="technologies__icon" title="JS"  tabIndex={0}/>
				<DiReact className="technologies__icon" title="REACT"  tabIndex={0}/>
				<SiTypescript className="technologies__icon" title="	TYPESCRIPT"  tabIndex={0}/>
				<SiTestinglibrary className="technologies__icon" title="	Testing library"  tabIndex={0}/>
				<DiNpm className="technologies__icon" title="NPM"  tabIndex={0}/>
				<DiGit className="technologies__icon" title="GIT"  tabIndex={0}/>
				<DiNodejsSmall className="technologies__icon" title="Node"  tabIndex={0}/>
			</div>
		</section>
		)
}

export default Technologies