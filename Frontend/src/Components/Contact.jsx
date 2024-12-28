import React from "react";
import Button from "./Button";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      <div className="flex h-screen items-center justify-center mt-16">
        <div className="card bg-base-100 w-[550px] shadow-2xl shadow-gray-700 border-gray-950">
          <div className="card-body">
            <h2 className="card-title">Contact US</h2>
            <form onSubmit={handleSubmit()}>
              <div className="">
                <div className="mt-6 space-y-1">
                  <span>Name</span>
                  <br />
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full p-1 px-3 py-2 text-sm border rounded-md outline-none"
                    {...register("name", { required: true })}
                  />
                  <br />
                  {errors.name && (
                    <span className="text-red-500 text-sm">
                      This field is required
                    </span>
                  )}
                </div>
                <div className="mt-6 space-y-1">
                  <span>Email</span>
                  <br />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full p-1 px-3 py-2 text-sm border rounded-md outline-none"
                    {...register("email", { required: true })}
                  />
                  <br />
                  {errors.email && (
                    <span className="text-red-500 text-sm">
                      This field is required
                    </span>
                  )}
                </div>
                <div className="mt-6 space-y-1">
                  <span>Address</span>
                  <br />
                  <input
                    type="address"
                    placeholder="Enter your address"
                    className="w-full p-1 px-3 py-2 text-sm border rounded-md outline-none"
                    {...register("address", { required: true })}
                  />
                  <br />
                  {errors.address && (
                    <span className="text-red-500 text-sm">
                      This field is required
                    </span>
                  )}
                </div>
                <div className="mt-6">
                  <label htmlFor="exampleTextArea" className="block mb-2">
                    Enter your text:
                  </label>
                  <textarea
                    id="exampleTextArea"
                    placeholder="Type something here..."
                    className="w-full p-2 border rounded-md outline-none focus:ring focus:ring-blue-300"
                    rows="5"
                  />
                </div>
              </div>
              <div className="card-actions justify-start mt-6">
                <Button btn="Submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
