import React from "react";
import Icard from "./Icard";
import result from "../assets/result.png";

function IcardGallery() {
  const student = {
    pic: result,
    name: "Yogendra",
    rollNo: "12234546554",
    college: "ABES",
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        border: "2px solid blue",
        padding: "20px",
      }}
    >
      <Icard
        pic={student.pic}
        name={student.name}
        rollNo={student.rollNo}
        college={student.college}
      />
    </div>
  );
}

export default IcardGallery;
