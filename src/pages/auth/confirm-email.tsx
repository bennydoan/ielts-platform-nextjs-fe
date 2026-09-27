import { confirmEmail } from "@/libs/auth";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

type Status = "loading" | "success" | "error";

function ConfirmEmailPage() {
  const router = useRouter();
  const { email, token } = router.query;
  const [status, setStatus] = useState<Status>("loading");
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    if (!router.isReady) return;

    if (typeof email !== "string" || typeof token !== "string") {
      setStatus("error");
      setMessage("Invalid confirmation link.");
      return;
    }

    confirmEmail(email, token)
      .then((result) => {
        setStatus("success");
        setMessage(result.message);
      })
      .catch((err) => {
        setStatus("error");
        setMessage(err instanceof Error ? err.message : "Something went wrong");
      });
  }, [router.isReady, email, token]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4 bg-white">
      {status === "loading" && (
        <p className="text-black">Confirming your email...</p>
      )}
      {status === "success" && (
        <>
          <p className="text-green-600">{message}</p>

          <Link href="/auth/login" className="text-blue-600 underline">
            Go to Login
          </Link>
        </>
      )}
      {status === "error" && <p className="text-red-500">{message}</p>}
    </div>
  );
}

export default ConfirmEmailPage;
