import todo from './photos/todo_redux.png';
import rps from './photos/rock_paper_scissors.jpg';
import ttt from './photos/tic_tac_toe.jpg';
import e_commerce from './photos/e_commerce.png'

export const projects = [
  {
    id: 1,
    title: 'E Commerce',
    tools: ['React', 'Redux Toolkit', 'JavaScript', 'Tailwind CSS',],
    project_url: 'https://github.com/alok454/E_Commerce',
    demo: 'https://e-commerce-cart-project1.vercel.app/',
    image: e_commerce,
    description: "Build a functional E-Commerce website where user can browse product and add them to cart, update their quantity, remove product. Used Redux Toolkit for state management Integrated a product view page allowing users to view detailed information about the single product"
  },
  {
    id: 2,
    title: 'Todo App using Redux Toolkit',
    tools: ['React', 'Redux Toolkit', 'JavaScript', 'Tailwind CSS'],
    project_url: 'https://github.com/alok454/Todo-with-Redux',
    demo: 'https://todo-redux-opal-pi.vercel.app/',
    image: todo,
    description: "Developed a dynamic and functionalities such as adding, editing, deleting, and marking tasks as completed. Implemented local storage of the browser that saves the tasks in browser. Used Redux Toolkit for state management. Learnt how to do state management using Redux Toolkit."
  },
  {
    id: 3,
    title: 'Rock Paper Scissors',
    tools: ['Javascript', 'HTML', 'CSS',],
    project_url: 'https://github.com/alok454/rock-paper-scissors-game',
    demo: 'https://rps-alok.netlify.app/',
    image: rps,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum excepturi vero placeat illum aspernatur eaque temporibus ut ullam, quisquam, repellendus omnis soluta. Omnis consequuntur reprehenderit quis optio libero modi ratione!"
  },
  {
    id: 4,
    title: 'Tic Tac Toe',
    tools: ['Javascript', 'HTML', 'CSS'],
    project_url: 'https://github.com/alok454/Tic-Tac-Toe-Game',
    demo: 'https://tic-tac-alok.netlify.app/',
    image: ttt,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum excepturi vero placeat illum aspernatur eaque temporibus ut ullam, quisquam, repellendus omnis soluta. Omnis consequuntur reprehenderit quis optio libero modi ratione!"
  },
]