import React from "react";
import { useNavigate } from "react-router-dom";

export const Homepage = ({ username, setUsername }) => {
  const navigate = useNavigate();

  return (
    <div className="h-56 w-96 flex flex-col border-2 border-black rounded-lg justify-evenly items-center bg-slate-400  ">
      <div className="h-9 text-xl">Hello {username}</div>
      <button
        onClick={() => {
          setUsername("");
          navigate("/login");
        }}
        className="h-[24] w-20 text-xl text-center rounded-md bg-white border-black border-2 cursor-pointer"
      >
        Logout
      </button>
    </div>
  );
};
