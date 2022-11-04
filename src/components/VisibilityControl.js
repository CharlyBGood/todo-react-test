
export const VisibilityControl = ({setShowCompleted, cleanTasks, isChecked}) => {
  // const [showCompleted, setShowCompleted] = useState(false);

  function handleDel() {
    if (window.confirm("Are you sure to delete this?")) {
      cleanTasks()
    }
  }
  return (
    <div className="d-flex justify-content-between bg-secondary text-center p-2 border-secondary">
        <div className="form-check form-switch">
        <input
        className="form-check-input"
          type="checkbox"
          checked={isChecked}
          onChange={(e) => setShowCompleted(e.target.checked)}
        />{" "}
        <label htmlFor="">Show tasks done</label>
        </div>
        <button onClick={handleDel} className="btn btn-danger btn-sm">
          Clear
        </button>
      </div>
  )
}