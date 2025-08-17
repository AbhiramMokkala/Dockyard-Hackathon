import React from "react";

function LoginPage() {
  return (
    <div className="login-page">
      <div className="login">
        <h1 className="lgn">Login</h1>
        <form className="form">
          <input
            type="email"
            placeholder="Email"
            className="email"
          />
          <input
            type="password"
            placeholder="Password"
            className="password"
          />
          <button className="btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
