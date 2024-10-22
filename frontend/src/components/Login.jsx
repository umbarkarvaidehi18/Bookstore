import React from "react";
import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
function Login() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    await axios
      .post("https://bookstore-backend-5ail.onrender.com/user/login", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Login successfully!");
          document.getElementById("my_modal_3").close();
          setTimeout(() => {
            window.location.reload(); //for page reloading after this
            localStorage.setItem("Users", JSON.stringify(res.data.user));
          }, 3000);
        }
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);

          toast.error("Error:" + err.response.data.message);
          setTimeout(() => {}, 3000);
        }
      });
  };

  // console.log(watch("email")); // watch input value by passing the name of it
  // console.log(watch("password"));
  return (
    <>
      <div>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box  dark:bg-slate-900 dark:text-white border-[2px]">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={() => document.getElementById("my_modal_3").close()}
              >
                ✕
              </Link>

              <h3 className="font-bold text-lg">Login</h3>

              {/* Email */}
              <div className="mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-80 px-3 py-1 border rounded-md outline-none  dark:text-black"
                  {...register("email", { required: true })}
                />
                <br />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              {/* Password */}
              <div className="mt-4 space-y-2">
                <span>Password</span>
                <br />
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-80 px-3 py-1 border rounded-md outline-none  dark:text-black"
                  {...register("password", { required: true })}
                />
                <br />
                {errors.password && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              {/* login button and text */}
              <div className="flex justify-around mt-4">
                <button
                  type="submit" // Added type="submit"
                  className="cursor-pointer bg-pink-500 text-white px-3 py-1 hover:bg-pink-700 duration-200 rounded-md "
                >
                  Login
                </button>

                <h1 className="">
                  Not registered?
                  <Link
                    to="/signup"
                    className="text-blue-500 underline cursor-pointer"
                  >
                    Signup
                  </Link>
                </h1>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </>
  );
}

export default Login;
