import React, { useContext, useState } from "react";
import Button from "./Button";
import Login from "./Login";
import { Context } from "../App";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const { isLoginModalOpen, openLoginModal, closeLoginModal } =
    useContext(Context);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const onSubmit = (data) => {
    navigate('/courses');
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div id="my_modal_3" className="w-[600px]">
        <div className="modal-box border">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Link
              type="button"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              to="/"
            >
              ✕
            </Link>
            <h1 className="font-bold text-3xl mb-10 text-orange-500">
              Sign Up Page
            </h1>
            <div className="mt-8 space-y-2">
              <span>Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full p-1 px-4 py-3 border rounded-md outline-none"
                {...register("name", { required: true })}
              />
              <br />
              {errors.name && (
                <span className="text-red-500 text-sm">
                  This field is required
                </span>
              )}
            </div>
            <div className="mt-8 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
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
            <div className="flex justify-between mt-10 md:gap-6">
              <Button btn={"SignUp"}/>
              <div className="ml-6">
                Already have an Account?{" "}
                <Link
                  to="/"
                  className="cursor-pointer underline  text-blue-600 hover:text-orange-500 active:text-orange-900 duration-500"
                  onClick={openLoginModal}
                >
                  Login
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
      {isLoginModalOpen && <Login />}
    </div>
  );
};

export default SignUp;
