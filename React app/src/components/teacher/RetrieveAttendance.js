export default function RetrieveAttendance(prop) {
  function setX() {
    prop.func(0);
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log("get att");
  }
  return (
    <div className="getAtndnc container row border mx-auto mt-3 p-3">
      <h3 className="text-center">Check Attendance</h3>
      <form className="col-12 row mx-auto" onSubmit={handleSubmit}>
        <div className="col-lg-4 mx-auto my-3  d-flex flex-row justify-content-center align-items-center">
          <label htmlFor="req-date">Date</label>
          <input id="req-date" type="date" className="form-control ms-2" />
        </div>
        <div className="col-lg-3 mx-auto my-3 d-flex flex-row justify-content-evenly align-items-center">
          <label htmlFor="req-class">Class</label>
          <input
            id="req-class"
            type="number"
            min="1"
            max="12"
            className="form-control ms-2"
          />
        </div>
        <div className="col-lg-3 mx-auto my-3 d-flex flex-row  justify-content-around align-items-center">
          <label htmlFor="req-sec">Section</label>
          <input id="req-sec" type="tel" className="form-control ms-2" />
        </div>
        <div className="col-lg-3 mx-auto my-3 text-center">
          <input
            className="btn-primary rounded mx-auto px-md-3 px-5 py-2 "
            type="submit"
            value="Get Attendance"
          />
        </div>
        <div className="col-lg-3 mx-auto my-3 text-center">
          <button
            onClick={setX}
            className="btn-primary rounded px-4 py-2  my-3 mx-auto "
          >
            <i className="bi bi-arrow-bar-left"></i>
          </button>
        </div>
      </form>
    </div>
  );
}
