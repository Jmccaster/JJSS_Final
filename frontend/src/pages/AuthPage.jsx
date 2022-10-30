import React from "react";
import SignUpForm from "../Components/SignUpForm";
import LoginForm from "../Components/LoginForm";
import "./../style.css";

function AuthPage({ setUser }) {
  return (
    <div className="PageContainer">
      <br />
      <br />
      <a href="/signup" className="button">
        New User? Create Account
      </a>
      <LoginForm setUser={setUser} />
    </div>
  );
}

export default AuthPage;
