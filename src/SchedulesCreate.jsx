export function SchedulesCreate(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateSchedule(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>New Schedule</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-floating sm-4 mb-3">
          <input type="text" className="form-control" name="plant" id="floatingInput" placeholder="plant" />
          <label for="floatingInput">Plant</label>
        </div>
        <div className="form-floating sm-4 mb-3">
          <input type="text" className="form-control" name="owner" id="floatingInput" placeholder="owner" />
          <label for="floatingInput">Owner</label>
        </div>
        <div className="form-floating sm-4 mb-3">
          <input type="text" className="form-control" name="image_url" id="floatingInput" placeholder="image" />
          <label for="floatingInput">Image URL</label>
        </div>
        <div className="form-floating sm-4 mb-3">
          <input
            type="text"
            className="form-control"
            name="watering_start_date"
            id="floatingInput"
            placeholder="watering_start_date"
          />
          <label for="floatingInput">Watering Start Date</label>
        </div>
        <button type="submit" className="btn btn-success" onClick={handleSubmit}>
          Create Schedule!
        </button>
      </form>
    </div>
  );
}
