import { man_working } from '../../assets/images';

const KnowMe = () => {

  return (
    <div className="w-full  flex flex-col md:flex-row itmes-center justify-center px-5 sm:px-10 py-10 sm:py-20 gap-10">
      <div className="Intro w-full md:w-3/5 flex flex-col items-center justify-center gap-10">
        <div className="text-2xl md:text-3xl lg:text-4xl font-semibold">
          <h2 className=''>Know who <span className="text-[#ff4800]">I'M</span></h2>
        </div>

        <div className="flex flex-col text-xl sm:text-2xl gap-3 lg:pl-10">
          <p className="">Hi Everyone, I am <span className="text-[#ff4800]">Alok Kumar</span> from <span className="text-[#ff4800]">Gopalganj, Bihar, India.</span></p>
          <p className="">I have completed Bachelor in Computer Application (BCA) from MMHAP University, Patna.</p>
          <p className="">Currently, I am fresher and looking for job opportunities where I can apply these skills and learn more.</p>
          <p className=""> I am eager to work on projects that help me grow as a Web Developer.</p>
        </div>
      </div>
      
      <div className="w-full md:w-2/5 flex items-center justify-center">
        <img src={man_working} alt="working-man" className="w-[200px] sm:w-[300px] rounded-md" style={{boxShadow:"0 0 20px 0px black"}} />
      </div>
    </div>
  )
}

export default KnowMe;
