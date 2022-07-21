import React from "react";
import { Input, Button } from "../../components";
import { useNavigate } from "react-router-dom";
import AlertToast from "../../utils/toast";
import { useForm } from "react-hook-form";
import user from "../../api/users";

function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const navigate = useNavigate();
  const onSubmit = (data) => {
    user
      .register(data)
      .then((response) => {
        AlertToast("success", `User ${data?.email} Created`);
        reset();
        navigate("/Login");
      })
      .catch((err) => {
        AlertToast("error", err?.message);
      });
  };

  return (
    <div className="p-10 border-[1px]">
      <div className="text-center pb-10 text-2xl font-bold">
        Create New Account
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-80">
          <Input
            {...register("name", { required: "name is required" })}
            name="name"
            type="name"
            title="Name"
            placeholder="name"
            errors={errors.name}
          />
          <Input
            {...register("email", {
              required: "email is required",
              pattern: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
            })}
            name="email"
            type="email"
            title="Email"
            placeholder="youremail@mail.com"
            errors={errors.email}
          />
          <Input
            {...register("password", {
              required: "password is required",
              minLength: 8,
            })}
            name="password"
            type="password"
            title="Password"
            placeholder="password"
            errors={errors.password}
          />
        </div>
        <div className="mt-5">
          <Button type="btn-wfull" title="Register" />
        </div>
      </form>
      <div
        onClick={() => navigate("/Login")}
        className="pt-4 cursor-pointer text-blue-500 font-semibold underline"
      >
        Already Have Account? Login
      </div>
    </div>
  );
}

export default RegisterForm;
