import RegisterTeacher from "./RegisterTeacher";
import { useState } from "react";
export default function ViewTeacher(prop) {
  const [x, setX] = useState(0);
  const setXZ = () => {
    setX(0);
  };
  function handleClick() {
    setX(1);
  }
  return (
    <div>
      <button onClick={() => prop.func()}>back</button>
      <div></div>
      <button onClick={handleClick}>Register Teacher</button>
      <div>{x === 1 ? <RegisterTeacher func={setXZ} /> : <></>}</div>
    </div>
  );
}
