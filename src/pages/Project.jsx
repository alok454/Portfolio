import Aos from 'aos';
import { projects } from '../project_detail/project'

const Project = () => {

  Aos.init({
    offset: 200, 
    duration: 600
  });

  return (
    <div className='py-10 px-2 md:px-10 flex items-center flex-col flex-wrap gap-10'>
      {
        projects.map((project) => (
          <div 
            className="w-[95%] max-w-[900px] min-h-[250px] py-3 flex flex-col md:flex-row gap-2 bg-white shadow-lg rounded-lg hover:scale-[1.05] duration-200" 
            key={project.id}
            data-aos="fade-left"
          >
            <div className="w-full md:w-1/2 flex justify-center items-center">
              <img src={project.image} className="w-[90%] rounded-md" alt="" />
            </div>

            <div className="w-[95%] md:w-1/2 px-5 flex flex-col justify-evenly gap-2">
              <div>
                <h2 className="text-2xl font-semibold text-[#ff4800]">{project.title}</h2>
              </div>
              <div className="">
                <p className="">{project.description}</p>
              </div>
              <div className="flex flex-wrap">
                <span className="font-bold mr-3">Tools: </span> 
                {project.tools.map((val, i)=>(
                  <p className="mx-2 text-[#ff4800]" key={i}>{val}</p>
                ))}
              </div>
              <div className="buttons">
                <button 
                  className='bg-[#ff4800] hover:bg-white border border-[#ff4800] text-white hover:text-[#ff4800] px-3 py-1 rounded-full mr-2' 
                  onClick={() => open(project.project_url)}
                >GitHub</button>
                <button 
                  className='bg-[#ff4800] hover:bg-white border border-[#ff4800] text-white hover:text-[#ff4800] px-3 py-1 rounded-full ml-2'
                  onClick={()=>open(project.demo)}
                >Demo</button>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Project