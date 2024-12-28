import React, { useContext } from "react";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Context } from "../App";
import axios from "axios";
import toast from "react-hot-toast";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { closeLoginModal, setAuthUser } = useContext(Context);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password
    };

    await axios
      .post("http://localhost:4001/user/login", userInfo)
      .then((res) => {
        if (res.data) {
          localStorage.setItem("Users",JSON.stringify(res.data.user))
          setAuthUser(res.data.user)
          closeLoginModal();
          navigate("/courses");
          toast.success("Login Successfull!");
        }
      })
      .catch((err) =>{
         console.log("Error", err);
         toast.error("Error: "+err.response.data.message);
      });
  };

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="modal-box border">
          <form onSubmit={handleSubmit(onSubmit)}>
            <button
              type="button"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={closeLoginModal}
            >
              ✕
            </button>
            <h1 className="font-bold text-3xl mb-10 text-orange-500">Login</h1>
            <div className="mt-8 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your Email"
                className="w-full p-1 px-4 py-3 border rounded-md outline-none"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  This field is required
                </span>
              )}
            </div>
            <div className="mt-8 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full p-1 px-4 py-3 border rounded-md outline-none"
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && (
                <span className="text-red-500 text-sm">
                  This field is required
                </span>
              )}
            </div>
            <div className="flex justify-between mt-10">
              <Button btn={"Login"} />
              <p>
                Not registered?{" "}
                <span
                  onClick={closeLoginModal}
                  className="cursor-pointer underline text-blue-600 hover:text-orange-500 active:text-orange-900 duration-500"
                >
                  <Link to="/signup">SignUp</Link>
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
