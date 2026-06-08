import Image from "next/image";
import Input from "./Input";
import SubmitButton from "./SubmitButton";
import { useForm } from "react-hook-form";

type formData = { email: string; password: string };

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<formData>();

  function onSubmit(data: formData) {
    console.log(data);
    reset();
  }

  return (
    <div className="bg-[#f0f0f0] md:w-[504px] h-auto w-auto p-[32px] rounded-md">
      <div className="w-full flex flex-col gap-3 mb-3 items-center justify-center">
        <button className="w-full h-[42px] border border-gray-300 rounded-lg text-black text-md flex justify-center items-center gap-2 hover:bg-white transition cursor-pointer">
          <Image
            alt="GGLogo"
            src="/images/googleIcon.svg"
            height={21}
            width={21}
          />
          <span>Continue with Google</span>
        </button>
        <p className="text-black">Or</p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-[16px]"
      >
        <Input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Invalid email address",
            },
          })}
          type="text"
          placeHolder="Tài khoản (Email)"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

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
          type="password"
          placeHolder="Mật khẩu"
        />
        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}

        <SubmitButton
          buttonName="Log in account"
          href="/auth/register"
          text="Không có tài khoản?"
          actionLink="Đăng kí"
        />
      </form>
    </div>
  );
}

export default LoginForm;
