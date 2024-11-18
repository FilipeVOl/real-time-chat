import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Email from "../../assets/email.svg"
import { useNavigate } from "react-router-dom";

const Form = ({ isSignInPage = false }) => {
  const [data, setData] = useState({
    ...(!isSignInPage && {
      fullName: "",
    }),
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen bg-[#accffe] flex items-center justify-center">
      <div className="bg-white w-[600px] h-auto p-32 gap-14 shadow-lg rounded-lg flex flex-col justify-center items-center">
        <div>
          <div className="text-4xl font-extrabold">
            Welcome {isSignInPage && "Back"}
          </div>
          <div className="text-xl font-light">
            {isSignInPage
              ? "Sign in to get explored"
              : "Sign up now to get started"}
          </div>
        </div>

        <form className="flex flex-col gap-4">
          {!isSignInPage && (
            <Input
              label="Full name"
              name="name"
              type="text"
              placeholder="Enter your full name"
              value={data.fullName}
              onChange={(e) => setData({ ...data, fullName: e.target.value })}
            />
          )}

          <Input
            label="Email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />

          <Input
            label="Password"
            name="password"
            type="password"
            placeholder="Enter your password"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />

          <Button
            label={isSignInPage ? "Sign in" : "Sign up"}
            className="w-1/2"
          />
          <div>
            {isSignInPage
              ? "Don't have an account?"
              : "Already have an account?"}
            <span
              onClick={() =>
                navigate(`/users/${isSignInPage ? "sign_up" : "sign_in"}`)
              }
              className="text-blue-500 cursor-pointer underline pl-2"
            >
              {isSignInPage ? "Sign up" : "Sign in"}
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
