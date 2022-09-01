import { useState } from "react";
export default function StudentDetails(prop) {
  const [adm, setAdm] = useState({});
  const setX = () => {
    prop.func(0);
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setAdm((adm) => ({ ...adm, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(adm);
  };
  return (
    <div className="border p-3 col-12 text-center ">
      <h3>Register New student</h3>
      <form onSubmit={handleSubmit} className="col-12">
        <div className="col-md-5 mx-auto my-3">
          <label htmlFor="stu-adm-num">Admission Number</label>
          <input
            id="stu-adm-num"
            type="text"
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="col-md-5 mx-auto my-3">
          <input
            type="submit"
            className="form-control"
            value="GET ATTENDANCE"
          />
        </div>
        <div className="btns row col-12 d-flex flex-row justify-content-md-center justify-content-evenly align-items-center">
          <input
            className="login-submit mx-md-3 col-6"
            type="submit"
            value="SUBMIT"
          />
        </div>
      </form>
      <button className="btn btn-primary my-3" onClick={setX}>back</button>
    </div>
  );
}
