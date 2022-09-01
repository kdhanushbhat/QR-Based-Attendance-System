import { useSelector } from "react-redux";
import { useState } from "react";
import UserDetails from "../UserDetails";
import GenReport from "./GenReport.js";
import StudentDetails from "./StudentDetails";
import Register from "./Register";
import RetrieveAttendance from "./RetrieveAttendance";
import AssignCredentials from "./AssignCredentials";
export default function TeacherHome() {
  function setXZ(e) {
    setX(e);
  }
  const user = useSelector((state) => state.user);
  const [x, setX] = useState(0);
  return (
    <div className="row homepage ">
      <div className=" school-details text-center col-12 mx-auto p-3 pt-5">
        <h1>Kendriya Vidyalaya, Pimpri</h1>
        <p>Pune, Maharashtra -123450 </p>
      </div>
      <UserDetails user={user} />
      <div className="col-sm-8 col-lg-9 row contianer mx-auto mt-3 p-3 ">
        {x === 0 ? (
          <>{user.role==="Teacher"?
            <button className="rounded bg-primary text-light col-5 m-3" onClick={() => setX(1)}>
              REGISTER STUDENT
            </button>: <button className="rounded bg-primary text-light col-5 m-3" onClick={() => setX(5)}>
              ASSIGN CREDENTIALS
            </button>}
            <button className="rounded text-light bg-primary col-5 m-3" onClick={() => setX(2)}>
              VIEW STUDENT DETAILS
            </button>
            <button className="rounded text-light bg-primary col-5 m-3" onClick={() => setX(3)}>
              CHECK ATTENDENCE
            </button>
            <button className="rounded text-light bg-primary col-5 m-3" onClick={() => setX(4)}>
              GENERATE REPORT
            </button>
          </>
        ) : x === 5 ? (
        <AssignCredentials func={setXZ}/>
        ) : x===1 ? (
          <Register func={setXZ} />
        ) : x === 2 ? (
          <StudentDetails func={setXZ} />
        ) : x === 3 ? (
          <RetrieveAttendance func={setXZ} />
        ) : (
          <GenReport func={setXZ} />
        )}
      </div>
    </div>
  );
}
