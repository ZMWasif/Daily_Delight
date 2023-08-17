import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex h-screen justify-center items-center bg-[url('/src/assets/header_bg.jpg')]">
      <div className="card w-96 bg-base-100 shadow-xl pb-4">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Login</h2>
          <form>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Your Password"
                className="input input-bordered w-full max-w-xs"
              />
            </div>

            <input
              className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary w-full max-w-xs"
              type="submit"
              value="Login"
            />
          </form>
          <p>
            <small>
              New to Doctors Smile?{" "}
              <Link className="text-primary" to="/signup">
                Create a New Account
              </Link>
            </small>
          </p>
          <div className="divider">OR</div>
          <button className="btn btn-outline btn-accent">
            Continue with Google
          </button>
        </div>
        <Link className="text-center font-semibold" to="/">
          Back to Home?
        </Link>
      </div>
    </div>
  );
};

export default Login;
