import React, { useState } from "react";
import { Button, Input } from "../../components";
import { useForm } from "react-hook-form";
import user from "../../api/users";
import AlertToast from "../../utils/toast";

function RequestResetPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const onSubmit = (data) => {
    setLoading(true);
    user
      .forgetPassword(data?.email)
      .then((response) => {
        setLoading(false);
        setMessage(
          `Email set to ${data?.email.substring(0, 5)}****, Check your email`
        );
        reset();
      })
      .catch((err) => {
        setLoading(false);
        AlertToast("error", "user not found");
      });
  };
  return (
    <div className="w-full h-screen bg-white flex justify-center">
      <div className="h-screen px-3 w-full lg:w-1/2 flex flex-col items-center justify-center">
        {message !== null && (
          <div className="px-3 py-4 mb-3 border rounded bg-green-100 font-semibold text-blue-400">
            {message}
          </div>
        )}
        <div className="p-10 border-[1px]">
          <div className="text-center text-2xl font-bold">Reset Password</div>
          <p className="py-4">Request Reset password will send by email</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="w-80">
              <Input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                    message: "Email is invalid",
                  },
                })}
                name="email"
                type="email"
                title="Email"
                placeholder="youremail@mail.com"
                errors={errors.email}
              />
            </div>
            <div className="mt-5">
              <Button
                disabled={loading}
                test-data-id="login-btn"
                type="btn-wfull"
                title={loading ? "Loading..." : "Send Email"}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RequestResetPassword;
