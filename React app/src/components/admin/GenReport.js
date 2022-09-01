import { useState } from "react";
export default function GenReport(prop) {
  const [cls, setCls] = useState("");
  const handleChange = (e) => {
    const value = e.target.value;
    setCls(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(cls);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="classinp">Class</label>
          <input
            id="classinp"
            className=""
            name="class"
            onChange={handleChange}
          />
        </div>
        <div>
          <input type="submit" className="" value="Submit" />
        </div>
      </form>
      <button onClick={() => prop.func()}>Back</button>
    </div>
  );
}
