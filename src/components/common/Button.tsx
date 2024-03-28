// import React from "react";

const Button = ({ title }: { title: string }) => {
  return (
    <div>
      <a className="px-6 py-3 relative text-sm font-semibold cursor-pointer  group overflow-hidden bg-MainTheme text-white inline-block">
        <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-700 ease-in-out transform translate-y-0 bg-black group-hover:h-full opacity-90"></span>
        <span className="relative group-hover:text-white">{title}</span>
      </a>
    </div>
  );
};

export default Button;
