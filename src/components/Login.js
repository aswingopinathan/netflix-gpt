import { useState } from "react";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <img
        className="absolute"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/fa7be975-efc3-48c6-8188-f07fdd1aa476/web/IN-en-20250428-TRIFECTA-perspective_e045264e-b4d4-4a6f-b2cc-f95e3344a332_small.jpg"
        alt="bg-img"
      />
      <form className="w-1/4 absolute p-12 bg-black bg-opacity-80 my-24 mx-auto right-0 left-0 text-white rounded-lg">
        <h1 className="font-bold text-3xl py-4">
          Sign {isSignIn ? "In" : "Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-slate-500"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-slate-500"
        />
        <input
          type="text"
          placeholder="Password"
          className="p-4 my-2 w-full  bg-slate-500"
        />
        <button className="bg-red-700 p-4 w-full my-6">
          Sign {isSignIn ? "In" : "Up"}
        </button>
        <p className="cursor-pointer" onClick={toggleSignIn}>
          {isSignIn
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
