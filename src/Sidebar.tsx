import SidebarForm from "./SidebarForm";

type Props = {
  bgColor: string
}
export default function Sidebar({bgColor}: Props) {
  return (
    <div className="d-flex flex-column col-md-4 border border-top-0 gx-0 text-light" style={{backgroundColor: bgColor}}>
        <SidebarForm/>
   </div>
  )
}
