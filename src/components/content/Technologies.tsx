import { DiCss3, DiHtml5,DiJsBadge,DiReact,DiSass, DiNpm,DiGit,DiNodejsSmall } from "react-icons/di";
import { SiTypescript, SiTestinglibrary } from "react-icons/si";


function Technologies() {


	return (
		<section className="technologies" id="technologies">
			<h4 className="technologies__title">
			Technologies I've been using:
			</h4>
			<ul className="technologies__icons">
				<DiHtml5 className="technologies__icon" title="HTML"/>
				<DiCss3 className="technologies__icon" title="CSS"/>
				<DiSass className="technologies__icon" title="SASS"/>
				<DiJsBadge className="technologies__icon" title="JS"/>
				<DiReact className="technologies__icon" title="REACT"/>
				<SiTypescript className="technologies__icon" title="	TYPESCRIPT"/>
				<SiTestinglibrary className="technologies__icon" title="	Testing library"/>
				<DiNpm className="technologies__icon" title="NPM"/>
				<DiGit className="technologies__icon" title="GIT"/>
				<DiNodejsSmall className="technologies__icon" title="Node"/>
			</ul>
		</section>
		)
}

export default Technologies