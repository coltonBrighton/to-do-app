import { taskArray } from "./TaskArray";

// giving my props textColor, newWidth, bgColor their respective types
type Props = {
  textColor: string;
  newWidth: number;
  bgColor: string;
};
// use destructuring to grab textColor, newWidth and bgColor then set their type to Props
export default function TasksToDo({ textColor, newWidth, bgColor }: Props) {
  return (
    <div className="col-md-4 d-flex flex-column gx-0" style={{ backgroundColor: bgColor }}>
      <h4 className="my-3 mx-3">To Do:</h4>
      <div className="card shadow-md mx-auto mb-3" style={{ width: newWidth + "rem" }}>
        <div className="card-body">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexCheckDefault"
              style={{ color: textColor }}
            >
              {taskArray[0].task}
            </label>
          </div>
        </div>
      </div>
      <div className="card shadow-md mx-auto mb-3" style={{ width: newWidth + "rem" }}>
        <div className="card-body shadow-sm">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexCheckDefault"
              style={{ color: textColor }}
            >
              {taskArray[1].task}
            </label>
          </div>
        </div>
      </div>
      <div className="card shadow-md mx-auto mb-5" style={{ width: newWidth + "rem" }}>
        <div className="card-body">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexCheckDefault"
              style={{ color: textColor }}
            >
              {taskArray[2].task}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
