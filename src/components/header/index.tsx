import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";



function Header(){

	const [ toggle, setToggle ] = useState<boolean>(false);



	function handleOnClick(e: React.MouseEvent<HTMLUListElement>){
		let target = e.target as HTMLElement;
		if(target.tagName === "svg"){
			setToggle(false);
		}else if(target.tagName === "A"){
			setToggle(false);
		}

	}


	return(
		<header className="header" role="banner">
			<div className="header__navbar navbar">
				<button className="menu__btn" onClick={()=>setToggle(true)}>
					<AiOutlineMenu/>
				</button>
				<ul className={toggle?"navbar__menu menu menu--open": "navbar__menu menu"} onClick={handleOnClick} role="navigation">
					<button className="menu__btn close">
						<AiOutlineClose/>
					</button>
					<li className="menu__li">
						<a href="#about" className="menu__link" tabIndex={0} aria-label="click to read about me">About me</a>
					</li>
					<li className="menu__li">
						<a href="#projects" className="menu__link" tabIndex={0} aria-label="click to read my projects">Projects</a>
					</li>
					<li className="menu__li">
						<a href="#technologies" className="menu__link" tabIndex={0} aria-label="click to read the technologies I know">Technologies</a>
					</li>
					<li className="menu__li">
						<a href="#contact" className="menu__link" tabIndex={0} aria-label="click to read my contact information">Contact</a>
					</li>
				</ul>
			</div>
		</header>
	)
}


export default Header;