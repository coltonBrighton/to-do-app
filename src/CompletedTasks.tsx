import { completedTaskArray } from "./CompletedTaskArray"

// giving my props textColor, newWidth, bgColor their respective types
type Props = {
    bgColor: string
    newWidth: number
    textColor: string
}

// use destructuring to grab textColor, newWidth and bgColor then set their type to Props
export default function CompletedTasks({ newWidth, textColor, bgColor }: Props) {
  return (
    <div className="col-md-4 d-flex flex-column vh-100 gx-0" style={{ backgroundColor: bgColor }}>
      <h4 className="my-3 mx-3 text-light">Completed Tasks:</h4>
      <div className="card shadow-md mx-auto mb-3" style={{ width: newWidth + "rem" }}>
        <div className="card-body">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked"
              checked
            />
            <label
              className="form-check-label text-decoration-line-through"
              htmlFor="flexCheckChecked"
              style={{ color: textColor }}
            >
              {completedTaskArray[0].task}
            </label>
          </div>
        </div>
      </div>
      <div className="card shadow-md mx-auto mb-3" style={{ width: newWidth + "rem" }}>
        <div className="card-body">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked"
              checked
            />
            <label
              className="form-check-label text-decoration-line-through"
              htmlFor="flexCheckDefault"
              style={{ color: textColor }}
            >
              {completedTaskArray[1].task}
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}
