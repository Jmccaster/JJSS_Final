import React from "react";
import SignUpForm from "../Components/SignUpForm";
import LoginForm from "../Components/LoginForm";
import "./../style.css";

function AuthPage({ setUser }) {
  return (
    <div>
      {/* <h1>AuthPage</h1> */}
      <SignUpForm setUser={setUser} />
      <br />
      <LoginForm setUser={setUser} />
    </div>
  );
}

export default AuthPage;
