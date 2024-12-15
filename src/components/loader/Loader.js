import React from "react";

function Loader({ prop }) {
  return (
    <div
      className={`size-5 border-[3px] mx-auto border-t-black border-r-black border-transparent rounded-full animate-spin  ${prop}`}
    ></div>
  );
}

export default Loader;
