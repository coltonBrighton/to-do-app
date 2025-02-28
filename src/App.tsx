import CompletedTasks from "./CompletedTasks";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import TasksToDo from "./TasksToDo";

export default function App () {
  // making a width prop for card sizes
  const width = 15
  // create application using compenents Navbar, Sidebar, TasksToDo, and CompletedTasks.
  return (
    <div className="row">
      <Navbar/>
      <Sidebar bgColor="teal"/>
      <TasksToDo newWidth={ width } textColor="blue" bgColor="pink"/>
      <CompletedTasks newWidth = { width } textColor="grey" bgColor="maroon"/>
    </div>
  )
}