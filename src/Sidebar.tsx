import SidebarForm from "./SidebarForm";
// type for bgColor prop which will change the background color
type Props = {
  bgColor: string
}
// using destructuring to pull in bgColor and give it the type of Props
export default function Sidebar({bgColor}: Props) {
  // Sidebar component contains a SidebarForm component
  return (
    <div className="d-flex flex-column col-md-4 border border-top-0 gx-0 text-light" style={{backgroundColor: bgColor}}>
        <SidebarForm/>
   </div>
  )
}
