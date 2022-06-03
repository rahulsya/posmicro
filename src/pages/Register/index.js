import React from "react";
import RegisterForm from "./registerForm";

function Register() {
  return (
    <div className="w-full h-screen bg-white flex justify-center">
      <div className="h-screen px-3 w-full lg:w-1/2 flex flex-col items-center justify-center">
        {/* <LoginForm /> */}
        <RegisterForm />
      </div>
    </div>
  );
}

export default Register;
