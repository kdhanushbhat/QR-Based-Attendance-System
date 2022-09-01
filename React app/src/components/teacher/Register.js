import {useState} from "react"
import axios from "axios"
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { datachange } from "../../store/dataslice";
export default function Register(prop) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [stu,setStu] = useState({});
  const [alert,setAlert] = useState("");
  const setX = () => {
    prop.func(0);
  };
  function handleSubmit(event) {
    event.preventDefault();
    console.log("submitted");
    setAlert("Submitted")
    setTimeout(()=>{
      setAlert("")
    },5000)
    axios.post("",{stu})
      .then((res) => {
        console.log(res.data);
        
      })
      .catch((error) => {
        console.log(error.response);
        console.log(error.response.status);
        console.log(error.response.headers);
      });
  }
  function handleChange(e){
    const name = e.target.name;
    const value = e.target.value;
    setStu((user) => ({ ...user, [name]: value }));
  }
  return (
    <div className="border p-3 col-12 text-center ">
      <h3>Register New student</h3>
      <form className="col-12 row mx-auto" onSubmit={handleSubmit}>
        <div className="col-md-5 mx-auto my-3">
          <label htmlFor="stu-name">Student Name</label>
          <input id="stu-name" name="name" type="text" className="form-control " onChange={handleChange}/>
        </div>
        <div className="col-md-5 mx-auto my-3">
          <label htmlFor="stu-adm-num">Admission Number</label>
          <input id="stu-adm-num" name="admnum" type="text" className="form-control " onChange={handleChange}/>
        </div>
        <div className="col-md-5 mx-auto my-3">
          <label htmlFor="stu-class">Class</label>
          <input
            id="stu-class"
            type="number"
            name="class"
            className="form-control "
            min="1"
            max="12"
            onChange={handleChange}
          />
        </div>
        <div className="col-md-5 mx-auto my-3">
          <label htmlFor="stu-sec">Section</label>
          <input onChange={handleChange} name="section" id="stu-sec" type="text" className="form-control " />
        </div>
        <div className="col-md-5 mx-auto my-3">
          <label htmlFor="stu-gen">Gender</label>
          <input onChange={handleChange} id="stu-gen" name="gender" type="text" className="form-control " />
        </div>
        <div className="col-md-6 mx-auto my-3 row ">
          <input
            className="btn-primary rounded p-4 py-2 col-md-8 col-10 my-3 mx-auto "
            type="submit"
            value="Generate QR"
          />
        </div>
      </form>
      <p className="alert">{alert}</p>
      <button
        className="btn-primary rounded p-4 py-2 col-2 my-3 mx-auto "
        onClick={setX}
      >
        <i className="bi bi-arrow-bar-left"></i>
      </button>
      {/* qr here */}
    </div>
  );
}
