import { ExamLibrary } from "@/components";
import { useRouter } from "next/router";
import { toast } from "sonner";
import { useAuth } from "@/context/AuthContext";
import { useEffect } from "react";

function ExamLibraryPage() {
  const router = useRouter();
  const { isLoggedIn, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading && !isLoggedIn) {
      toast.error("Please Log In.", { id: "auth-required" });
      router.replace("/auth/login");
    }
  }, [isLoading, isLoggedIn, router]);

  return <ExamLibrary />;
}

export default ExamLibraryPage;
