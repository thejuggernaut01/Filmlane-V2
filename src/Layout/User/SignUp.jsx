import React, { useRef, useState, useContext } from "react";
import { Form, Link, useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { AuthContext } from "../../store/AuthContext";
import AuthLoader from "../UI/AuthLoader";

const SignUp = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const ctx = useContext(AuthContext);

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const navigate = useNavigate();
  // create collection for users
  const usersCollection = collection(db, "users");

  const submitHandler = async (e) => {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }
    if (
      firstNameRef.current.value.trim() === "" ||
      lastNameRef.current.value.trim() === ""
    ) {
      return setError("Name fields cannot be empty");
    }
    if (
      passwordRef.current.value.length < 6 &&
      passwordConfirmRef.current.value.length < 6
    ) {
      return setError("Password must be at least 6 characters long");
    }

    try {
      setError("");
      setLoading(true);
      await ctx.signUp(emailRef.current.value, passwordRef.current.value);
      await addDoc(usersCollection, {
        firstName: firstNameRef.current.value,
        lastName: lastNameRef.current.value,
        emailAddress: emailRef.current.value,
      });

      navigate("/");
    } catch (error) {
      setError(error.message.match(/Error \((.*?)\)/)[1]);
    }

    setLoading(false);
  };

  return (
    <>
      <div className="text-center w-100 mt-6 mb-8">
        <div className="inline-block border border-gray-600 rounded-md mb-2 text-white">
          {error && (
            <p className="bg-red-400 pt-1 pb-1 rounded-t-md">{error}</p>
          )}
          <h2 className="text-2xl pt-2 pb-3 font-semibold">Sign Up</h2>
          <Form className="pl-5 pr-5" onSubmit={submitHandler}>
            <div className="flex flex-col text-left">
              <label className="mb-1">
                First name<span className="text-red-500 inline">*</span>
              </label>
              <input
                className="text-black border border-gray-500 outline-none rounded-md w-[20rem] pl-1 mb-3 pt-1 pb-1"
                type="text"
                name="FName"
                ref={firstNameRef}
                required
              />
            </div>

            <div className="flex flex-col text-left">
              <label className="mb-1">
                Last name<span className="text-red-500 inline">*</span>
              </label>
              <input
                className="text-black border border-gray-500 outline-none rounded-md w-[20rem] pl-1 mb-3 pt-1 pb-1"
                type="text"
                name="FName"
                ref={lastNameRef}
                required
              />
            </div>

            <div className="flex flex-col text-left">
              <label className="mb-1">
                Email<span className="text-red-500 inline">*</span>
              </label>
              <input
                className="text-black border border-gray-500 outline-none rounded-md w-[20rem] pl-1 mb-3 pt-1 pb-1"
                type="email"
                name="email"
                ref={emailRef}
                required
              />
            </div>

            <div className="flex flex-col text-left">
              <label className="mb-1">
                Password<span className="text-red-500 inline">*</span>
              </label>
              <input
                className="text-black border border-gray-500 outline-none rounded-md pl-1 mb-3 pt-1 pb-1"
                type="password"
                name="password"
                ref={passwordRef}
                required
              />
            </div>

            <div className="flex flex-col text-left">
              <label className="mb-1">
                Confirm Password<span className="text-red-500 inline">*</span>
              </label>
              <input
                className="text-black border border-gray-500 outline-none rounded-md pl-1 pt-1 pb-1"
                type="password"
                name="confirmPassword"
                ref={passwordConfirmRef}
                required
              />
            </div>

            <button
              disabled={loading}
              className="mt-5 border border-blue-600 bg-blue-600 text-white rounded-md w-full mb-4 pt-2 pb-2"
              type="submit"
            >
              {loading ? <AuthLoader /> : "Sign up"}
            </button>
          </Form>
        </div>
        <div className="text-center text-white">
          Already have an account?{" "}
          <Link to={"/sign-in"} className="no-underline text-blue-600 inline">
            Log in
          </Link>
        </div>
      </div>
    </>
  );
};

export default SignUp;
