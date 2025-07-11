import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginWithGoogle, logoutUser } from "../features/auth/authThunk";
// import { setUser, clearUser } from "../features/auth/authSlice";
import { FcGoogle } from "react-icons/fc";
import HomePage from "./HomePage";

const Login = () => {
  // ----------- state handling --------------

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  // ---------- handle login ----------------

  const handleLogin = () => {
    dispatch(loginWithGoogle());
  };

  return (
    <>
      {user ? (
        <>
          <HomePage />
        </>
      ) : (
        <>
          <div className="flex h-screen w-full justify-center items-center bg-sky-100">
            <div className="card shadow p-5 rounded-2xl w-100 h-auto bg-white">
              <h3 className="text-center text-3xl font-bold text-blue-500 mb-3">
                Welcome User
              </h3>
              <p className="text-center text-gray-500 mb-4">
                Sign in with Google to manage your books
              </p>
              <button
                onClick={handleLogin}
                className="bg-gray-100 hover:bg-gray-200 duration-200 cursor-pointer w-full flex py-2 rounded items-center justify-center gap-2 fw-semibold"
              >
                <FcGoogle size={20} />
                Sign in with Google
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Login;
