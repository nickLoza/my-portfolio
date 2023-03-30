import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";



function Header(){

	const [ toggle, setToggle ] = useState<boolean>(false);



	function handleOnClick(e: React.MouseEvent<HTMLUListElement>){
		let target = e.target as HTMLElement; 
		if(target.tagName === "A"){
			setToggle(false);
		}

	}


	return(
		<header className="header" role="banner">
			<nav className="header__navbar navbar">
				<button className="menu__btn" onClick={()=>setToggle(true)} aria-label="open menu">
					<AiOutlineMenu/>
				</button>
				<ul className={toggle?"navbar__menu menu menu--open": "navbar__menu menu"} onClick={handleOnClick}>
						<button className="menu__btn close" onClick={()=>setToggle(false)} aria-label="close menu">
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
			</nav>
		</header>
	)
}


export default Header;