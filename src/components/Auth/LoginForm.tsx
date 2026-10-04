import Image from "next/image";
import Input from "./Input";
import SubmitButton from "./SubmitButton";
import { useForm } from "react-hook-form";
import { logIn } from "@/libs/auth";
import { useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/context/AuthContext";

type formData = { email: string; password: string };

function LoginForm() {
  const router = useRouter();

  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<formData>();

  async function onSubmit(data: formData) {
    setErrorMessage(null);
    setIsSubmitting(true);
    try {
      const result = await logIn({
        email: data.email,
        password: data.password,
      });
      login(result.fullName, result.role, result.email);
      reset();
      if (result.role === "Admin") {
        router.push("/admin");
      } else {
        router.push("/");
      }
    } catch (err) {
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong",
      );
    } finally {
      setIsSubmitting(false);
    }
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
          autoComplete="email"
          placeHolder="Tài khoản (Email)"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

        <Input
          {...register("password", {
            required: "Password can not be blank",
          })}
          type="password"
          autoComplete="current-password"
          placeHolder="Mật khẩu"
        />

        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}

        {errorMessage && <p className="text-red-500">{errorMessage}</p>}

        <SubmitButton
          buttonName={isSubmitting ? "Loggin In..." : "Log In"}
          href="/auth/register"
          text="Dont have account?"
          actionLink="Register"
        />
      </form>
    </div>
  );
}

export default LoginForm;
