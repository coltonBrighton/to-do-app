import CompletedTasks from "./CompletedTasks";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import TasksToDo from "./TasksToDo";

export default function App () {
  const width = 15
  return (
    <div className="row">
      <Navbar/>
      <Sidebar bgColor="teal"/>
      <TasksToDo newWidth={ width } textColor="blue" bgColor="pink"/>
      <CompletedTasks newWidth = { width } textColor="grey" bgColor="maroon"/>
    </div>
  )
}