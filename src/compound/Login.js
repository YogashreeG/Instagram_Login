import React from "react";
export function Login() {
    return (
      <div className="container">
        <div className="box">
          <div className="heading"></div>
          <form className="login-form">
            <div className="field">
              <input
                id="username"
                type="name"
                placeholder="Phone number, username, or email"
              />
              <label for="username">Phone number, username, or email</label>
            </div>
            <div className="field">
              <input id="password" type="password" placeholder="password" />
              <label for="password">Password</label>
            </div>
            <button className="login-button" title="login">
              Log In
            </button>
            <div className="separator">
              <div className="line"></div>
              <p>OR</p>
              <div className="line"></div>
            </div>
            <div className="other">
              <button className="fb-login-btn" type="button">
                <i className="fa fa-facebook-official fb-icon"></i>
                <span className="">Log in with Facebook</span>
              </button>
              <a className="forgot-password" href="#">
                Forgot password?
              </a>
            </div>
          </form>
        </div>
        <div className="box">
          <p>
            Don't have an account?{" "}
            <a className="signup" href="#">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    );
}