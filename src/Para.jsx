import React from "react";

const Para = () => {
  //   let con = 0;

  const parameter = (con) => {
    alert(con + 10);
  };
  return (
    <div>
      <button onClick={() => parameter(10)}>click me</button>
    </div>
  );
};

export default Para;
