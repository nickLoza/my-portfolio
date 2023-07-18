import { FaLinkedin, FaGithub, FaEnvelope, FaUser, FaDesktop, FaFile } from 'react-icons/fa';

import Profile from "../../assets/profile.webp"
import es from "../../assets/es.svg"
import gb from "../../assets/gb.svg"
import it from "../../assets/it.svg"

function Aside() {
	return (
		<aside className='w-[70px] fixed left-0 top-0 lg:w-[250px] h-full bg-[#000] text-white text-center p-[1rem] border-r-[1px]'>
			{/*top*/}
			<div>
				<div className='sm:hidden lg:block'>	
					<p className='text-3xl font-bold mb-2'>Nick Loza</p>
					<img className='h-[150px] rounded-[18px] m-auto' src={Profile} alt="Nick Loza" height={100}/>
					<p className='text-2xl text-[#ccc] mb-3'>Frontend Developer</p>
					<b className='text-xl'>My Lenguages:</b>
					<div className='flex justify-center gap-5 mt-2'>
						<span role="img" aria-label="Spanish">
	        				<img src={es} alt='spanish' width={25}/>
					    </span>
					    <span role="img" aria-label="English">
					        <img src={gb} alt='english' width={25}/>
					    </span>
					    <span role="img" aria-label="Italian">
					    	<img src={it} alt='italian' width={25}/>
					    </span>
				</div>
				</div>	
				<ul className='flex flex-col justify-center mt-12 mb-8 pl-1 lg:pl-5'>
			      <li className='transition-colors ease-in-out delay-50 hover:text-[#B58956] mb-2'>
			        <a className='flex items-center w-[150px] text-4xl lg:text-xl' href="https://www.linkedin.com/in/nicklozadev/" target='_blank'>
			          <FaLinkedin  className="w-5 mr-2" /> <span className='hidden lg:block'>LinkedIn</span>
			        </a>
			      </li>
			      <li className='transition-colors ease-in-out delay-50 hover:text-[#B58956] mb-2'>
			        <a className='flex items-center w-[150px] text-4xl lg:text-xl' href="https://github.com/nickLoza" target='_blank'>
			          <FaGithub className="w-5 mr-2" /> <span className='hidden lg:block'>GitHub</span>
			        </a>
			      </li>
			      <li className='transition-colors ease-in-out delay-50 hover:text-[#B58956] mb-2'>
			        <a className='flex items-center w-[150px] text-4xl lg:text-xl' href="mailto:nicklozadeveloper@gmail.com" target='_blank'>
			          <FaEnvelope className="w-5 mr-2" /> <span className='hidden lg:block'>Gmail</span>
			        </a>
			      </li>
			    </ul>
			</div>
			{/*bottom*/}
			<ul className='flex flex-col justify-center my-4 pl-1 lg:pl-4'>
					<li className='transition-colors ease-in-out delay-50 hover:text-[#B58956] mb-2'>
				        <a className='flex items-center w-[150px] text-4xl lg:text-xl' href="#about">
				          	<FaUser className="w-5 mr-2"/> <span className='hidden lg:block'>About Me</span>
				        </a>
			      	</li>
					<li className='transition-colors ease-in-out delay-50 hover:text-[#B58956] mb-2'>
				        <a className='flex items-center w-[150px] text-4xl lg:text-xl' href="#projects">
				          	<FaDesktop className="w-5 mr-2"/> <span className='hidden lg:block'>Projects</span>
				        </a>
			      	</li>
			      	<li className='transition-colors ease-in-out delay-50 hover:text-[#B58956] mb-2'>
				        <a className='flex items-center w-[150px] text-4xl lg:text-xl' href="https://drive.google.com/file/d/15QWOvEur3FUzgjGaSgoKpsfcWbfCqJC-/view?usp=sharing" target='_blank'>
				          	<FaFile className="w-5 mr-2"/> <span className='hidden lg:block'>Resume</span>
				        </a>
			      	</li>
				</ul>
		</aside>
	)
}

export default Aside