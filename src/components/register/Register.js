import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Register = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    repassword: "",
  });

  const handelSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:2022/register", user).then((res) => {
      if (res.data.msg === "User create") {
        navigate("/login");
      }
    });
  };

  const handelChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="border-black border-2 rounded-lg p-5 bg-slate-300 text-center">
      <h1 className="mb-4 text-[2rem]">Register a new user</h1>
      <form onSubmit={handelSubmit} className="flex flex-col w-[35rem] gap-y-4">
        <input
          className="p-2 border-2  border-black rounded-lg"
          type="text"
          name="name"
          placeholder="Enter your name"
          required
          onChange={handelChange}
        />
        <input
          className="p-2 border-2  border-black rounded-lg"
          type="email"
          name="email"
          placeholder="Enter your email"
          required
          onChange={handelChange}
        />
        <input
          className="p-2 border-2  border-black rounded-lg"
          type="text"
          name="password"
          placeholder="Enter your password"
          required
          onChange={handelChange}
        />
        <input
          className="p-2 border-2  border-black rounded-lg"
          type="text"
          name="repassword"
          placeholder="Confirm password"
          required
          onChange={handelChange}
        />
        <button
          type="submit"
          className="border-2 text-xl p-2 border-black rounded-lg bg-green-700"
        >
          Submit
        </button>
        <h1>OR</h1>
        <button
          className="border-2 text-xl p-2 border-black rounded-lg bg-blue-800"
          onClick={() => {
            navigate("/login");
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};
