import React from "react";

function Icard({ pic, name, rollNo, college }) {
  return (
    <div
      style={{
        color: "red",
        border: "2px solid yellow",
        height: "400px",
        width: "200px",
      }}
    >
      <img src={pic} height={200} width={200} alt="Student" />

      <h2>NAME: {name}</h2>
      <h2>ROLLNO: {rollNo}</h2>
      <h2>COLLEGE: {college}</h2>
    </div>
  );
}

export default Icard;
