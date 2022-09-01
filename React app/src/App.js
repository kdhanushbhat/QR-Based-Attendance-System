import "./styles.css";

import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Adminlogin from "./login/Adminlogin";
import TeacherHome from "./components/teacher/TeacherHome";
export default function App() {
  const role = useSelector((state) => state.user.role);

  return (
    <>
      <Routes>
        <Route path="/" element={<Adminlogin />} />
        <Route
          path="/home"
          element={role !== "" ? <TeacherHome /> : <Navigate to="/" />}
        />
      </Routes>
    </>
  );
}
