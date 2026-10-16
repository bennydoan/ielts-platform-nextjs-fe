import { useRouter } from "next/router";
import GreetingComponent from "@/components/ExamLibrary/GreetingComponent";
import WholeTestBank from "@/components/ExamLibrary/WholeTextBank";
import { useAuth } from "@/context/AuthContext";
import { toast } from "sonner";
import { useEffect } from "react";
function ExamTypePage() {
  const { isLoggedIn, isLoading } = useAuth();

  const router = useRouter();
  const { type } = router.query; // "listening", "reading", etc.

  useEffect(() => {
    if (!isLoggedIn && !isLoading) {
      toast.error("Please Log In.", { id: "auth-required" });
      router.replace("/auth/login");
    }
  }, [isLoading, isLoggedIn, router]);

  if (typeof type !== "string") return null; // handles undefined during SSR
  if (isLoading || !isLoggedIn) return null; // don't show the page while checking or redirecting

  return (
    <div className="flex flex-col pt-[20px] pb-[40px] bg-white lg:px-6 w-full">
      <GreetingComponent />
      <WholeTestBank header={type.charAt(0).toUpperCase() + type.slice(1)} />
    </div>
  );
}

export default ExamTypePage;
