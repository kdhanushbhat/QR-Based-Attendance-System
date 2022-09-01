import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-body">
      <h1 className=" text-center p-5" style={{ fontWeight: 800 }}>
        TECHIQ - ATTENDANCE SYSTEM
      </h1>
      <div className="row login-div text-center col-md-6 col-8 mx-auto ">
        <h1 className="wlcm">WELCOME</h1>
        <NavLink to="/admin-login" className="nav-link col-10 mx-auto my-5">
          <button className="col-10 btn ">LOGIN AS ADMIN</button>
        </NavLink>
        <NavLink to="/teacher-login" className="nav-link col-10 mx-auto mb-5">
          <button className=" col-10 btn ">LOGIN AS TEACHER</button>
        </NavLink>
      </div>
    </div>
  );
}
