import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register } from "../../services";
import { useTitle } from "../../hooks/useTitle";
import ErrorPage from "../Error/ErrorPage";

const Resgister = () => {
  const navigate = useNavigate();
  useTitle("Register");

  const [errorMessage, setErrorMessage] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  async function handleRegister(e) {
    try {
      e.preventDefault();

      const authDetails = {
        name: e.target.name.value,
        email: e.target.email.value,
        password: e.target.password.value,
      };

      const data = await register(authDetails);

      data.accessToken ? navigate("/products") : toast.error(data);
      toast.success(`Resgistered successfully ${authDetails.name}`);
    } catch (error) {
      setErrorMessage(error.message);
    }
  }

  const togglePasswordVisiblity = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <main>
      {errorMessage ? (
        <ErrorPage errorMessage={errorMessage} />
      ) : (
        <div className="font-[sans-serif]">
          <div className="flex fle-col items-center py-6 mt-16 justify-center  px-4">
            <div className="grid md:grid-cols-2 items-center gap-4 max-w-6xl w-full">
              <div className="border border-gray-300 rounded-lg p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto">
                <form className="space-y-4" onSubmit={handleRegister}>
                  <div className="mb-8">
                    <h3 className="text-gray-800 dark:text-white text-3xl font-extrabold">
                      Sign Up
                    </h3>
                    <p className="text-gray-500 dark:text-white text-sm mt-4 leading-relaxed">
                      Create your account to explore endless possibilities.
                    </p>
                  </div>

                  <div>
                    <label className="text-gray-800 dark:text-white text-sm mb-2 block">
                      Name
                    </label>
                    <div className="relative flex items-center">
                      <input
                        name="name"
                        type="name"
                        required
                        className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-blue-600"
                        placeholder="Enter user name"
                        autoCapitalize="off"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-gray-800 dark:text-white text-sm mb-2 block">
                      User email
                    </label>
                    <div className="relative flex items-center">
                      <input
                        name="email"
                        type="email"
                        required
                        className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-blue-600"
                        placeholder="Enter user email"
                        autoCapitalize="off"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-gray-800 dark:text-white text-sm mb-2 block">
                      Password
                    </label>
                    <div className="relative flex items-center">
                      <input
                        name="password"
                        type={passwordShown ? "text" : "password"}
                        required
                        className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-blue-600"
                        placeholder="Enter password"
                        autoCapitalize="off"
                      />
                      <svg
                        onClick={togglePasswordVisiblity}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#bbb"
                        stroke="#bbb"
                        className="w-[18px] h-[18px] absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
                        viewBox="0 0 128 128"
                      >
                        {passwordShown ? (
                          <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"></path>
                        ) : (
                          <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM41.213 38.987l-7.071-7.071-4.242 4.242 7.071 7.071C21.124 52.11 9.582 65.804 8.707 63.994C13.465 71.205 32.146 96 64 96c10.016 0 19.292-2.896 27.213-7.987l7.071 7.071 4.242-4.242-7.071-7.071C106.876 75.89 118.418 62.196 119.293 64.006C114.535 56.795 95.854 32 64 32c-10.016 0-19.292 2.896-27.213 7.987z"></path>
                        )}
                      </svg>
                    </div>
                  </div>

                  {/* <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label
                      for="remember-me"
                      className="ml-3 block text-sm text-gray-800"
                    >
                      Remember me
                    </label>
                  </div>

                  <div className="text-sm">
                    <a
                      href="jajvascript:void(0);"
                      className="text-blue-600 hover:underline font-semibold"
                    >
                      Forgot your password?
                    </a>
                  </div>
                </div> */}

                  <div className="!mt-8">
                    <button
                      type="submit"
                      className="w-full shadow-xl py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                      style={{ backgroundColor: "#2C2E35" }}
                    >
                      Resgister
                    </button>
                  </div>

                  <p className="text-gray-800 text-sm mt-6 text-center">
                    Already have an account?{" "}
                    <Link
                      to="/login"
                      className="text-blue-600 font-semibold hover:underline ml-1"
                    >
                      Login here
                    </Link>
                  </p>
                </form>
              </div>
              <div className="lg:h-[400px] md:h-[300px] max-md:mt-8">
                <img
                  src="https://readymadeui.com/login-image.webp"
                  className="w-full h-full max-md:w-4/5 mx-auto block object-cover"
                  alt="Dining Experience"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Resgister;
