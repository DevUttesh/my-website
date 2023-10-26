import React from "react";

const Heading = (props) => {
  return (
    <div className="container flex flex-col items-center text-center">
      <div className="max-w-max">
        <h1 className="text-4xl mb-3 font-bold ">{props.title}</h1>
        <div className="relative" >
          <div className="before:border before:flex after:border-2 after:flex after:w-14 after:border-black after:absolute after:top-[-50%] after:translate-x-3/4"></div>
        </div>
      </div>
      <p>{props.desc}</p>
    </div>
  );
};

export default Heading;
