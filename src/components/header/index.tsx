





function Header(){
	return(
		<div className="header">
			<div className="header__navbar navbar">
				<a href="/my-portfolio/" className="navbar__logo">
					Nick Loza
				</a>
				<ul className="navbar__menu menu">
					<li className="menu__li">
						<a href="#projects" className="menu__link">PROJECTS</a>
					</li>
					<li className="menu__li">
						<a href="#tecnologies" className="menu__link">TECNOLOGIES</a>
					</li>
					<li className="menu__li">
						<a href="#about" className="menu__link">ABOUT ME</a>
					</li>
				</ul>
			</div>
		</div>
	)
}


export default Header;