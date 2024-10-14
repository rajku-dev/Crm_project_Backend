import React, { useState } from "react";
import loginSvg from "../../public/Group.png";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/features/authSlice"; // import the loginUser action

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const errorMessage = useSelector((state) => state.auth.errorMessage);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dispatch the loginUser action and navigate if successful
    dispatch(loginUser(email, password))
      .then((result) => {
        if (!result.error) {
          navigate("/sidebar");
        }
      });
  };

  return (
    <section className="flex items-center justify-center min-h-screen p-14 bg-gradient-to-r from-blue-300 to-blue-500">
      <div className="flex flex-col md:flex-row items-center justify-center w-full min-h-screen p-6 rounded-xl shadow-lg bg-white">
        <div className="flex justify-center items-center">
          <img src={loginSvg} alt="Login Illustration" className="" />
        </div>

        <div className="flex flex-col p-6">
          <h1
            className="text-[35px] font-normal leading-[46.38px] mb-4 text-center"
            style={{
              fontFamily: "PT Serif Caption",
              width: "436px",
              height: "102px",
            }}
          >
            <span className="block mr-[14em]">Hello</span>
            <span className="block text-left">Welcome Back!!</span>
          </h1>

          <form className="flex flex-col" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Email"
              name="email"
              className="mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />

            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="keepLoggedIn"
                  className="mr-2 leading-tight"
                />
                <label htmlFor="keepLoggedIn" className="text-sm text-gray-600">
                  Keep me logged in
                </label>
              </div>
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Forgot password?
              </a>
            </div>

            {errorMessage && (
              <p className="text-red-500 text-sm mb-4">{errorMessage}</p> // Show error message
            )}

            <button
              type="submit"
              className="bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-500 transition duration-200"
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
