import React from "react";
import { Input, Button } from "../../components";
import { useForm } from "react-hook-form";
import users from "../../api/users";
import { setAuthorizationHeader } from "../../api/axiosConfig";

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    users
      .login(data)
      .then((response) => {
        console.log(response);
        localStorage.setItem(
          "Tokens",
          JSON.stringify({
            ...response,
            email: data.email,
          })
        );
        setAuthorizationHeader(response?.token);
        // users.details().then((response) => {
        //   console.log(response);
        // });
        // const { data } = response;
        // console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="p-10 border-[1px]">
      <div className="text-center pb-10 text-2xl font-bold">LOGIN POSMICRO</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-80">
          <Input
            {...register("email", {
              required: true,
              pattern: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
            })}
            name="email"
            type="email"
            title="Email"
            placeholder="youremail@mail.com"
            errors={errors.email}
          />
          <Input
            {...register("password", { required: true })}
            name="password"
            type="password"
            title="Password"
            placeholder="password"
            errors={errors.password}
          />
        </div>
        <div className="cursor-pointer text-blue-500 font-semibold underline">
          Forgot Pasword
        </div>
        <div className="mt-5">
          <Button type="btn-wfull" title="Login" />
        </div>
      </form>
      <div className="mt-5">
        <Button
          bg="text-blue-500 border-[1px]"
          type="btn-wfull"
          title="Sign Up"
        />
      </div>
    </div>
  );
}

export default LoginForm;
