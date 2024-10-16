import { CiMail } from "react-icons/ci";
import { LuGithub } from "react-icons/lu";
import { FaLinkedinIn  } from "react-icons/fa";


const contacts = [
  {
    id: 1,
    name: "Email",
    url: "mailto:alokkumar82980@gmail.com",
    icon: <CiMail size={25}/>
  },
  {
    id: 2,
    name: "Github",
    url: "https://github.com/alok454",
    icon: <LuGithub size={25}/>
  },
  {
    id: 3,
    name: "LinkedIn",
    url: "https://linkedin.com/in/alokkumar55",
    icon: <FaLinkedinIn  size={25}/>
  },
];

const Contact = () => {
  return (
    <div className="flex gap-5">
    {
      contacts.map((item) => (
        <div 
          key={item.id} 
          className="p-[8px] rounded-full bg-white text-black hover:scale-[1.15] duration-200 hover:cursor-pointer"
          onClick={() => open(item.url)}
        >
          {item.icon}
        </div>
      ))
    }
    </div>
  )
}

export default Contact