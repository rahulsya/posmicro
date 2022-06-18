import React from "react";
import { Input, Button } from "../../components";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import users from "../../api/users";
import { setAuthorizationHeader } from "../../api/axiosConfig";
import AlertToast from "../../utils/toast";
// redux
import { useDispatch } from "react-redux";
import { setAuth } from "../../redux/Auth/actions";

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    users
      .login(data)
      .then((response) => {
        dispatch(setAuth({ ...response, email: data.email }));
        setAuthorizationHeader(response?.token);
        getUserDetails();
        AlertToast("success", "login success");
        navigate("/");
      })
      .catch((err) => {
        // console.log(err.response);
        AlertToast("error", err.response?.data?.message);
      });
  };

  const getUserDetails = () => {
    users.details().then((res) => {
      const { data } = res;
      dispatch(setAuth({ role: data.role }));
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
          Forgot Password
        </div>
        <div className="mt-5">
          <Button test-data-id="login-btn" type="btn-wfull" title="Login" />
        </div>
      </form>
      <div className="mt-5">
        <Button
          onPress={() => navigate("/register")}
          bg="text-blue-500 border-[1px]"
          type="btn-wfull"
          title="Sign Up"
        />
      </div>
    </div>
  );
}

export default LoginForm;
