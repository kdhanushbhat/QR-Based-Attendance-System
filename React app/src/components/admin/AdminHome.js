import ViewTeacher from "./ViewTeacher";
import UserDetails from "../UserDetails";
import GenReport from "./GenReport";
import { useSelector } from "react-redux";
import { useState } from "react";
export default function AdminHome() {
  const [x, setX] = useState(0);
  function setXZ() {
    setX(0);
  }
  const user = useSelector((state) => state.user);
  return (
    <div className="row homepage">
      <UserDetails user={user} />
      <div className="col-sm-8 col-lg-9 row contianer mx-auto mt-3 p-3">
        {x === 0 ? (
          <>
            <button className="col-5 m-3" onClick={() => setX(1)}>
              VIEW TEACHER
            </button>
            <button className="col-5 m-3" onClick={() => setX(2)}>
              GENERATE REPORT
            </button>
          </>
        ) : x === 1 ? (
          <ViewTeacher func={setXZ} />
        ) : (
          <GenReport func={setXZ} />
        )}
      </div>
    </div>
  );
}
