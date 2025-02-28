export default function SidebarForm() {
  // make the Add Task button alert the user that the button was clickd
  const addTask = () => {
    return alert('You clicked me!')
  };
  return (
    <div className="m-3">
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Add New Task
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Enter task here"
        />
      </div>
      <div className="d-flex flex-column">
        <button
          type="submit"
          className="btn btn-primary mb-3 flex-grow-1"
          onClick={ addTask }
        >
          Add Task
        </button>
      </div>
    </div>
  );
}
