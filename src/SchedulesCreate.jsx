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
        <div>
          Plant: <input name="Plant.name" type="text" />
        </div>
        <div>
          Owner: <input name="User.name" type="text" />
        </div>
        <div>
          Image: <input name="url" type="text" />
        </div>
        <div>
          Watering Start Date: <input name="watering_start_date" type="text" />
        </div>
        <button type="submit">Create Schedule!</button>
      </form>
    </div>
  );
}
