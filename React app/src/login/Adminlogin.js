import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./login.css";
import { useDispatch } from "react-redux";
import { datachange } from "../store/dataslice";
import axios from "axios";
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js";

export default function Adminlogin() {
  const obj = { email: "", role: "", username: "" };
  const [user, setUser] = useState({});
  const [alert, setAlert] = useState("");
  const [role, setRole] = useState("Select a Role");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState("");
  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setUser((user) => ({ ...user, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (role === "Select a Role") {
      setAlert("Please Select a Role");
      return;
    }
    user.role = role;
 
    
    axios.get("https://localhost:5000/")
      .then((res) => {
        console.log(res.data);
        
      })
      .catch((error) => {
        console.log(error.response);
        // console.log(error.response.status);
        // console.log(error.response.headers);
        setAlert("Invalid Credentials")
      });

      
        navigate("/home", { replace: false });
  }
  return (
    <div className="loginbox col-12 ">
      <h1 className="p-4">LOGIN</h1>
      <form
        className="login-form row col-md-6 col-9 mx-auto mt-5 py-5"
        onSubmit={handleSubmit}
      >
        <div className="dropdown">
          <p
            className="btn btn-primary dropdown-toggle col-10 py-3 mb-2"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {role}
          </p>

          <ul className="dropdown-menu">
            <li
              className="px-3 py-2"
              onClick={() => setRole("State Education Secratory")}
            >
              State Education Secratory
            </li>
            <li
              className="px-3 py-2"
              onClick={() => setRole("District Education Director")}
            >
              District Education Director
            </li>
            <li className="py-2 px-3" onClick={() => setRole("Block officer")}>
              Block officer
            </li>
            <li className="py-2 px-3" onClick={() => setRole("Head Master")}>
              Head Master
            </li>
            <li className="py-2 px-3" onClick={() => setRole("Teacher")}>
              Teacher
            </li>
          </ul>
        </div>
        <div className="email-label row col-sm-10  col-10 text-center">
          <label
            htmlFor="email"
            className="col-sm-3 mx-auto d-flex justify-content-center align-items-center"
          >
            Email
          </label>
          <input
            id="email"
            className="login-input email col-sm-9 col-10 mx-auto"
            name="email"
            type="email"
            onChange={handleChange}
            required
          />
        </div>
        <br />
        <div className="password-label row col-sm-10  col-10 text-center">
          <label
            htmlFor="pass"
            className="col-sm-3 mx-auto d-flex justify-content-center align-items-center"
          >
            Password
          </label>
          <input
            id="pass"
            className="login-input col-sm-9 col-10 mx-auto"
            name="pass"
            type="password"
            onChange={handleChange}
            required
          />
        </div>
        <p className="alert">{alert}</p>
        <br />
        <div className="btns row col-12 d-flex flex-row justify-content-md-center justify-content-evenly align-items-center">
          <input
            className="login-submit mx-md-3 col-6"
            type="submit"
            value="SUBMIT"
          />
        </div>
      </form>
    </div>
  );
}
