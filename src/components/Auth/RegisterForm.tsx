import Input from "./Input";
import SubmitButton from "./SubmitButton";

import { useForm } from "react-hook-form";

type registerForm = {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<registerForm>();

  //watch the password
  const password = watch("password");

  function onSubmit(data: registerForm) {
    console.log(data);
    reset();
  }
  return (
    <div className="bg-[#f0f0f0] md:w-[504px]  h-auto w-auto p-[32px] rounded-md ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-[16px]"
      >
        <label htmlFor="username" className="text-md text-black font-medium">
          Tài khoản
        </label>
        <Input
          {...register("userName", {
            required: "User name is required",
            pattern: {
              value: /^[A-Za-z\s]+$/,
              message: "Name can only contain letters and spaces",
            },
          })}
          id="username"
          type="text"
          placeHolder="Họ và tên"
        />
        {errors.userName && (
          <p className="text-red-500">{errors.userName.message}</p>
        )}

        <label htmlFor="email" className="text-md text-black font-medium">
          Email
        </label>
        <Input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Invalid email address",
            },
          })}
          id="email"
          type="email"
          placeHolder="Nhập Email"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

        <label htmlFor="password" className="text-md text-black font-medium">
          Mật khẩu
        </label>

        <Input
          {...register("password", {
            required: "Password can not be blank",
            pattern: {
              value:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
              message:
                "Password must be at least 8 characters and contain uppercase, lowercase, number, and special character",
            },
          })}
          id="password"
          type="password"
          placeHolder="********"
        />
        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}

        <label
          htmlFor="confirmPassword"
          className="text-md text-black font-medium"
        >
          Xác nhận mật khẩu
        </label>
        <Input
          {...register("confirmPassword", {
            required: "Please confirm your password",
            validate: (value) =>
              value === password || "The password do not match",
          })}
          id="confirmPassword"
          type="password"
          placeHolder="********"
        />
        {errors.confirmPassword && (
          <p className="text-red-500">{errors.confirmPassword.message}</p>
        )}

        <SubmitButton
          buttonName="Tạo tài khoản"
          href="/auth/login"
          text="Đã có tài khoản?"
          actionLink="Đăng nhập"
        />
      </form>
    </div>
  );
}

export default RegisterForm;
