import React from "react";

const Button = () => {
  return (
    <button
      type="submit"
      className="text-preset-6 w-full md:w-auto rounded-full px-6 py-3 cursor-pointer border-2 border-secondary-cyan-400 text-secondary-blue-800 hover:text-primary-neutral-000 bg-secondary-cyan-400 hover:bg-transparent focus:outline-secondary-red-4000 focus:outline-2 focus:outline-offset-3 focus:bg-secondary-cyan-400 focus:text-secondary-blue-800 transition-all ease-in"
    >
      Get notified
    </button>
  );
};

export default Button;
