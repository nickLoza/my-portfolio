import { FaJs, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaSass, FaNpm, FaGit } from 'react-icons/fa';
import { SiNextdotjs,SiTailwindcss, SiTypescript, SiWebpack, SiTestinglibrary } from 'react-icons/si';
import projectsDB from '../../projectsDB/projectsDB';
import laptopGif from '../../assets/laptop-gif.webp';


function Main() {
	return (
	<main className='ml-[70px] lg:ml-[250px] bg-[#25242B] py-8 px-8 xl:px-[50px] text-[#ccc]'>
		<section id="about" className='grid grid-cols-1 xl:grid-cols-2 justify-items-end mb-8'>
			{/*left*/}
			<div>
				<h1 className='text-6xl text-white mb-1'>Nick Loza</h1>
				<h2 className='text-3xl mb-3'>Frontend Developer</h2>
				<p className='text-xl'>I'm a frontend developer with a continuous interest in learning new technologies and expanding my knowledge</p>
				<h3 className='text-2xl text-[#B58956] mt-3'>Technologies: </h3>
				<ul className='flex flex-wrap gap-x-5 gap-y-2 text-3xl my-4'>
					<li className='flex items-center gap-x-1 transition-color duration-500 cursor-pointer hover:text-[#B58956]' title='Javascript'>
						<FaJs />
					</li>
					<li className='flex items-center gap-x-1 transition-color duration-500 cursor-pointer hover:text-[#B58956]' title="React">
						<FaReact />
					</li>
					<li className='flex items-center gap-x-1 transition-color duration-500 cursor-pointer hover:text-[#B58956]' >
						<SiNextdotjs title="Next.js" />
					</li>
					<li className='flex items-center gap-x-1 transition-color duration-500 cursor-pointer hover:text-[#B58956]'>
						<SiTypescript title="Typescript"/>
					</li>
					<li className='flex items-center gap-x-1 transition-color duration-500 cursor-pointer hover:text-[#B58956]'>
						<FaHtml5 title="HTML"/>
					</li>
					<li className='flex items-center gap-x-1 transition-color duration-500 cursor-pointer hover:text-[#B58956]'>
						<FaCss3Alt title="CSS"/>
					</li>
					<li className='flex items-center gap-x-1 transition-color duration-500 cursor-pointer hover:text-[#B58956]'>
						<FaSass title="SASS"/>
					</li>
					<li className='flex items-center gap-x-1 transition-color duration-500 cursor-pointer hover:text-[#B58956]'>
						<SiTailwindcss title="Tailwind"/>
					</li>
					<li className='flex items-center gap-x-1 transition-color duration-500 cursor-pointer hover:text-[#B58956]'>
						<SiWebpack title="Webpack"/>
					</li>
					<li className='flex items-center gap-x-1 transition-color duration-500 cursor-pointer hover:text-[#B58956]'>
						<SiTestinglibrary title="Testing Library"/>
					</li>
					<li className='flex items-center gap-x-1 transition-color duration-500 cursor-pointer hover:text-[#B58956]'>
						<FaNpm title="NPM"/>
					</li>
					<li className='flex items-center gap-x-1 transition-color duration-500 cursor-pointer hover:text-[#B58956]'>
						<FaGit title="GIT"/>
					</li>
					<li className='flex items-center gap-x-1 transition-color duration-500 cursor-pointer hover:text-[#B58956]'>
						<FaNodeJs title="Node.js"/>
					</li>
				</ul>
			</div>
			{/*right*/}
			<img className='hidden xl:flex' src={laptopGif} alt="laptop coding"/>
		</section>
		{/*bottom*/}
		<section id="projects">
			<h4 className='text-4xl mb-3 uppercase'>Projects</h4>
			<div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2  2xl:grid-cols-3 gap-x-4 gap-y-8 sm:gap-y-14">
      {projectsDB.map((project) => (
        <div key={project.id} className="flex flex-col justify-between sm:h-[350px] lg:h-[350px] max-w-[550px]">
          <img src={project.imgUrl} alt={project.title} className=" w-full md:h-[190px] lg:h-[240px]  mb-1" />
          <h2 className="text-lg font-semibold">{project.title}</h2>
          <p className="text-gray-600 mb-4 text-white">{project.description}</p>
          <div className="flex justify-center gap-x-2">
            <a href={project.websiteLink} target="_blank" rel="noopener noreferrer" className="text-white font-bold py-1 px-3 transition-color ease-in-out duration-300 bg-black hover:bg-white hover:text-black">Website</a>
            <a href={project.repositoryLink} target="_blank" rel="noopener noreferrer" className="text-white font-bold py-1 px-3 transition-color ease-in-out duration-300 bg-black hover:bg-white hover:text-black">Repository</a>
          </div>
        </div>
      ))}
    </div>
		</section>
	</main>
	)
}

export default Main