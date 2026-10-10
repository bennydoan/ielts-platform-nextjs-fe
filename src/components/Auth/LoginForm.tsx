import { GoogleLogin } from "@react-oauth/google";
import { logIn, googleLogin } from "@/libs/auth";
import Input from "./Input";
import SubmitButton from "./SubmitButton";
import { useForm } from "react-hook-form";
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
        <GoogleLogin
          onSuccess={async (credentialResponse) => {
            try {
              const result = await googleLogin(credentialResponse.credential!); //// the ID token verified by backend
              login(result.fullName, result.role, result.email);
              router.push("/");
            } catch (err) {
              setErrorMessage(
                err instanceof Error ? err.message : "Google login failed",
              );
            }
          }}
          onError={() => setErrorMessage("Google login failed")}
          width="440"
        />

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
