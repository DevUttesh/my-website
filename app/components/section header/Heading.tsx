import React from "react";

const Heading = (props) => {
  return (
    <div className="container flex flex-col items-center text-center">
      <div className="max-w-max" >
        <h1 className="text-4xl mb-3 font-bold " >{props.title}</h1>
        <div className="underline border border-slate-500 "></div>
      </div>
      <p>{props.desc}</p>
    </div>
  );
};

export default Heading;
