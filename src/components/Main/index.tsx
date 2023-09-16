import { FaJs, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaSass, FaNpm, FaGit } from 'react-icons/fa';
import { SiNextdotjs,SiTailwindcss, SiTypescript, SiWebpack, SiTestinglibrary, SiGraphql, SiMui, SiRedux } from 'react-icons/si';
import projectsDB from '../../projectsDB/projectsDB';
import laptopGif from '../../assets/computer.gif';
import { GiPolarBear } from "react-icons/gi";

function Main() {
	return (
	<main className='ml-[70px] lg:ml-[250px] bg-[#000] py-8 px-8 xl:px-[50px] text-[#ccc]'>
		<section id="about" className='grid grid-cols-1 xl:grid-cols-2 justify-items-end mb-8'>
			{/*left*/}
			<div>
				<h1 className='text-6xl text-white mb-1'>Nick Loza</h1>
				<h2 className='text-3xl mb-3'>Frontend Developer</h2>
				<p className='text-xl'>I'm a frontend developer with a continuous interest in learning new technologies and expanding my knowledge</p>
				<h3 className='text-2xl text-[#B58956] mt-3'>Technologies: </h3>
				<ul className='flex flex-wrap gap-x-5 gap-y-2 text-3xl my-4'>
					<li className='flex items-center gap-x-1 transition-color duration-500 cursor-pointer hover:text-[#B58956]' title='Javascript'>
						<FaJs title="Javascript"/>
						<span className='text-sm'>Javascript</span>
					</li>
					<li className='flex items-center gap-x-1 transition-color duration-500 cursor-pointer hover:text-[#B58956]' title="React">
						<FaReact title="React"/>
						<span className='text-sm'>React</span>
					</li>
					<li className='flex items-center gap-x-1 transition-color duration-500 cursor-pointer hover:text-[#B58956]' >
						<SiNextdotjs title="Next.js" />
						<span className='text-sm'>Next.js</span>
					</li>
					<li className='flex items-center gap-x-1 transition-color duration-500 cursor-pointer hover:text-[#B58956]'>
						<SiTypescript title="Typescript"/>
						<span className='text-sm'>Typescript</span>
					</li>
					<li className='flex items-center gap-x-1 transition-color duration-500 cursor-pointer hover:text-[#B58956]'>
						<FaHtml5 title="HTML5"/>
						<span className='text-sm'>HTML5</span>
					</li>
					<li className='flex items-center gap-x-1 transition-color duration-500 cursor-pointer hover:text-[#B58956]'>
						<FaCss3Alt title="CSS"/>
						<span className='text-sm'>CSS</span>
					</li>
					<li className='flex items-center gap-x-1 transition-color duration-500 cursor-pointer hover:text-[#B58956]'>
						<FaSass title="SASS"/>
						<span className='text-sm'>SASS</span>
					</li>
					<li className='flex items-center gap-x-1 transition-color duration-500 cursor-pointer hover:text-[#B58956]'>
						<SiTailwindcss title="Tailwind"/>
						<span className='text-sm'>Tailwind</span>
					</li>
					<li className='flex items-center gap-x-1 transition-color duration-500 cursor-pointer hover:text-[#B58956]'>
						<SiMui title="Material-UI"/>
						<span className='text-sm'>Material-UI</span>
					</li>
					<li className='flex items-center gap-x-1 transition-color duration-500 cursor-pointer hover:text-[#B58956]'>
						<SiRedux title="Redux toolkit"/>
						<span className='text-sm'>Redux toolkit</span>
					</li>
					<li className='flex items-center gap-x-1 transition-color duration-500 cursor-pointer hover:text-[#B58956]'>
						<GiPolarBear title="Zustand"/>
						<span className='text-sm'>Zustand</span>
					</li>
					<li className='flex items-center gap-x-1 transition-color duration-500 cursor-pointer hover:text-[#B58956]'>
						<SiGraphql title="GraphQl"/>
						<span className='text-sm'>GraphQl</span>
					</li>
					<li className='flex items-center gap-x-1 transition-color duration-500 cursor-pointer hover:text-[#B58956]'>
						<SiWebpack title="Webpack"/>
						<span className='text-sm'>Webpack</span>
					</li>
					<li className='flex items-center gap-x-1 transition-color duration-500 cursor-pointer hover:text-[#B58956]'>
						<SiTestinglibrary title="Testing Library"/>
						<span className='text-sm'>Testing</span>
					</li>
					<li className='flex items-center gap-x-1 transition-color duration-500 cursor-pointer hover:text-[#B58956]'>
						<FaNpm title="NPM"/>
						<span className='text-sm'>NPM</span>
					</li>
					<li className='flex items-center gap-x-1 transition-color duration-500 cursor-pointer hover:text-[#B58956]'>
						<FaGit title="GIT"/>
						<span className='text-sm'>GIT</span>
					</li>
					<li className='flex items-center gap-x-1 transition-color duration-500 cursor-pointer hover:text-[#B58956]'>
						<FaNodeJs title="Node.js"/>
						<span className='text-sm'>Node</span>
					</li>
				</ul>
			</div>
			{/*right*/}
			<img className='hidden xl:flex' src={laptopGif} alt="laptop coding" width={500}/>
		</section>
		{/*bottom*/}
		<section id="projects">
			<h4 className='text-4xl mb-3 uppercase'>Projects</h4>
			<div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2  2xl:grid-cols-3 gap-x-4 gap-y-8 sm:gap-y-14">
      {projectsDB.map((project) => (
        <div key={project.id} className="flex flex-col justify-between h-[375px] lg:h-[400px] max-w-[550px] border-[1px] p-2 pb-4">
          <img src={project.imgUrl} alt={project.title} className=" w-full md:h-[190px] lg:h-[240px]  mb-1" />
          <h2 className="text-lg font-semibold">{project.title}</h2>
          <p className="text-gray-600  text-white">{project.description}</p>
          <div className="flex justify-center gap-x-2 text-sm md:text-base">
            <a href={project.websiteLink} target="_blank" rel="noopener noreferrer" className="text-white font-bold py-1 px-3 transition-color ease-in-out duration-300 bg-black hover:bg-white hover:text-black border-[1px]">Website</a>
            <a href={project.repositoryLink} target="_blank" rel="noopener noreferrer" className="text-white font-bold py-1 px-3 transition-color ease-in-out duration-300 bg-black hover:bg-white hover:text-black border-[1px]">Repository</a>
          </div>
        </div>
      ))}
    </div>
		</section>
	</main>
	)
}

export default Main