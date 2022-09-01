import { useState } from "react";
import axios from "axios";
export default function RegisterTeacher(prop) {
  const [tch, setTch] = useState({});

  const setX = () => {
    prop.func();
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setTch((tch) => ({ ...tch, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(tch);
    axios({
      method: "POST",
      url: ""
    }).then((res) => {});
  };
  return (
    <div>
      <h3>Register New Teacher</h3>
      <form className="col-12 row mx-auto" onSubmit={handleSubmit}>
        <div className="col-md-5 mx-auto my-3">
          <label htmlFor="tch-name">Name</label>
          <input
            id="tch-name"
            type="text"
            className="form-control "
            onChange={handleChange}
            name="name"
          />
        </div>
        <div className="col-md-5 mx-auto my-3">
          <label htmlFor="tch-email">email</label>
          <input
            id="tch-email"
            type="text"
            className="form-control "
            onChange={handleChange}
            name="email"
          />
        </div>
        <div className="col-md-5 mx-auto my-3">
          <label htmlFor="tch-school">School</label>
          <input
            id="tch-school"
            type="tel"
            className="form-control "
            onChange={handleChange}
            name="school"
          />
        </div>
        <div className="col-md-5 mx-auto my-3">
          <label htmlFor="tch-add">Address</label>
          <input
            id="tch-add"
            type="tel"
            className="form-control "
            onChange={handleChange}
            name="address"
          />
        </div>
        <div className="col-md-5 mx-auto my-3">
          <label htmlFor="tch-std">Standard</label>
          <input
            id="tch-std"
            type="tel"
            className="form-control "
            onChange={handleChange}
            name="standard"
          />
        </div>
        <div className="col-md-6 mx-auto my-3 row ">
          <input
            className="btn-primary rounded p-4 py-2 col-md-8 col-10 my-3 mx-auto "
            type="submit"
            value="Submit"
          />
        </div>
      </form>
      <button onClick={setX}>close</button>
    </div>
  );
}
