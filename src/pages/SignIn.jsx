import { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../contexts/context";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [isErrorMessage, setErrorMessage] = useState(false);
  const {
    email,
    setEmail,
    setPassword,
    password,
    fullName,
    setFullName,
    isAuthenticated,
    setIsAuthenticated,
  } = useContext(GlobalContext);

  const toggleMode = () => {
    setIsSignIn((prevMode) => !prevMode);
  };

  function handleSignIn() {
    if (email.length < 5 && password.length < 3) {
      setErrorMessage(true);
      return;
    }
    setErrorMessage(false);
    setIsAuthenticated((prev) => !prev);
  }

  function handleSignUp() {
    if ((email.length < 5 && password.length < 3) || !fullName) {
      setErrorMessage(true);
      return;
    }
    setIsAuthenticated((prev) => !prev);
    setErrorMessage(false);
  }
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/", { replace: true });
    }
  }, [isAuthenticated, navigate]);
  return (
    <div className="flex flex-col items-center justify-start h-screen p-4 shadow-md">
      <h1 className="text-2xl font-bold mb-5">
        {isSignIn ? "Sign In" : "Sign Up"}
      </h1>
      <form
        className="w-full max-w-sm bg-white p-6 rounded shadow-md bg-gray-100"
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          isSignIn ? handleSignIn() : handleSignUp();
        }}
      >
        <div className="mb-4">
          {isErrorMessage && (
            <p className="text-center">
              All fields should be completed with valid credentials
            </p>
          )}
          <label
            className="text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            value={email}
            id="email"
            type="email"
            placeholder="Enter your email"
            className="w-full px-3 py-2 border rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            value={password}
            id="password"
            type="password"
            placeholder="Enter your password"
            className="w-full px-3 py-2 border rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {!isSignIn && (
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Full Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your full name"
              className="w-full px-3 py-2 border rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
        )}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
      </form>
      <p className="mt-4 text-sm text-gray-600">
        {isSignIn ? "Don't have an account?" : "Already have an account?"}{" "}
        <button
          onClick={toggleMode}
          className="text-blue-500 hover:underline focus:outline-none"
        >
          {isSignIn ? "Sign Up" : "Sign In"}
        </button>
      </p>
    </div>
  );
}
