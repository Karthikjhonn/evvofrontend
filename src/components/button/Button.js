import React from "react";

function Button({ type = "button", name = "button name" ,onclick,disable="false"}) {
  return (
    <button
      className="w-full bg-gradient-to-bl from-accent-500  to-accent-400 transition-all duration-1000 ease-in-out hover:bg-gradient-to-br focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center text-white"
      type={type}
      onClick={onclick ? () => onclick() : undefined}
      disabled={disable}
    >
      {name}
    </button>
  );
}

export default Button;
