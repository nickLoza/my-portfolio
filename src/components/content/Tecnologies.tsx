import { DiCss3, DiHtml5,DiJsBadge,DiReact,DiSass, DiNpm,DiGit,DiNodejsSmall } from "react-icons/di";
import { SiTypescript, SiTestinglibrary } from "react-icons/si";


function Tecnologies() {


	return (
		<div className="tecnologies" id="tecnologies">
			<h4 className="tecnologies__title">
			Tecnologies I've been using:
			</h4>
			<ul className="tecnologies__icons">
				<DiHtml5 className="tecnologies__icon" title="HTML"/>
				<DiCss3 className="tecnologies__icon" title="CSS"/>
				<DiSass className="tecnologies__icon" title="SASS"/>
				<DiJsBadge className="tecnologies__icon" title="JS"/>
				<DiReact className="tecnologies__icon" title="REACT"/>
				<SiTypescript className="tecnologies__icon" title="	TYPESCRIPT"/>
				<SiTestinglibrary className="tecnologies__icon" title="	Testing library"/>
				<DiNpm className="tecnologies__icon" title="NPM"/>
				<DiGit className="tecnologies__icon" title="GIT"/>
				<DiNodejsSmall className="tecnologies__icon" title="Node"/>
			</ul>
		</div>
		)
}

export default Tecnologies