import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Input } from "../../components";
import { useForm } from "react-hook-form";
import AlertToast from "../../utils/toast";
import user from "../../api/users";
import { useState } from "react";
function ResetPassword() {
  const params = useParams();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = (data) => {
    setLoading(true);
    if (data?.password !== data?.confirm_password) {
      AlertToast("error", "password dan comfirmation password harus sama ");
      setLoading(false);
      return;
    } else {
      user
        .updatePassword(params?.token, data?.password)
        .then((response) => {
          reset();
          setLoading(false);
          AlertToast("success", "Reset Password Success");
          navigate("/Login");
        })
        .catch((err) => {
          setLoading(false);
          console.log(err.response);
        });
    }
  };

  return (
    <div className="w-full h-screen bg-white flex justify-center">
      <div className="h-screen px-3 w-full lg:w-1/2 flex flex-col items-center justify-center">
        {/* <LoginForm /> */}
        {/* <RegisterForm /> */}
        <div className="p-10 border-[1px]">
          <div className="text-center pb-10 text-2xl font-bold">
            Create New Account
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="w-80">
              <Input
                {...register("password", {
                  required: "password is required",
                  pattern: {
                    value: /^(?=.*?[a-z])(?=.*?[0-9]).{8,}$/,
                    message: "Password terdiri dari karakter dan angka",
                  },
                })}
                name="password"
                type="password"
                title="Password"
                placeholder="password"
                errors={errors.password}
              />
              <Input
                {...register("confirm_password", {
                  required: "password is required",
                  pattern: {
                    value: /^(?=.*?[a-z])(?=.*?[0-9]).{8,}$/,
                    message: "Password terdiri dari karakter dan angka",
                  },
                })}
                name="confirm_password"
                type="password"
                title="Confirmation Password"
                placeholder="Re enter password"
                errors={errors.confirm_password}
              />
            </div>
            <div className="mt-5">
              <Button
                disabled={loading}
                type="btn-wfull"
                title="Update Password"
              />
            </div>
          </form>
          <div
            onClick={() => navigate("/Login")}
            className="pt-4 cursor-pointer text-blue-500 font-semibold underline"
          >
            Already Have Account? Login
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
