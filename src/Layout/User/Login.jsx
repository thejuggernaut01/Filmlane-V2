import { useRef, useState, useContext } from "react";
import { Form, Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../../store/AuthContext";
import AuthLoader from "../UI/AuthLoader";

const Login = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const emailRef = useRef();
  const passwordRef = useRef();
  const ctx = useContext(AuthContext);

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);

      await ctx.login(emailRef.current.value, passwordRef.current.value);

      navigate("/");
    } catch (error) {
      setError(error.message.match(/Error \((.*?)\)/)[1]);
    }

    setLoading(false);
  };

  return (
    <>
      <div className="text-center w-100 mt-20 mb-20 text-white">
        <div className="inline-block border border-gray-600 rounded-md mb-2">
          {error && (
            <p className="bg-red-400 pt-1 pb-1 rounded-t-md">{error}</p>
          )}

          <h2 className="text-2xl pt-4 pb-3 font-semibold">Sign In</h2>
          <Form
            // method="post"
            // action="user/log-in"
            className="pl-5 pr-5"
            onSubmit={submitHandler}
          >
            <div className="flex flex-col text-left mb-3">
              <label className="mb-1">
                Email<span className="text-red-500 inline"> *</span>
              </label>
              <input
                className="border border-gray-500 outline-none rounded-md w-[20rem] pl-1 mb-2 pt-1 pb-1 text-black"
                name="email"
                type="email"
                ref={emailRef}
                required
              />
            </div>

            <div className="flex flex-col text-left mb-5">
              <label className="mb-1">
                Password<span className="text-red-500 inline"> *</span>
              </label>
              <input
                className="border border-gray-500 outline-none rounded-md pl-1 pt-1 pb-1 text-black"
                type="password"
                name="password"
                ref={passwordRef}
                required
              />
            </div>

            <div className="my-6">
              <button
                disabled={loading}
                className="my-4 border border-blue-600 bg-blue-600 text-white rounded-md w-full mb-2 pt-2 pb-2"
                type="submit"
              >
                {loading ? <AuthLoader /> : "Sign In"}
              </button>
            </div>
          </Form>
        </div>

        <div className="text-center">
          Need an account?{" "}
          <Link to={"/sign-up"} className="no-underline text-blue-600 inline">
            Sign Up
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
