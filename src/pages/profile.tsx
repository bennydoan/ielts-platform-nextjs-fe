import { useEffect } from "react";
import { useRouter } from "next/router";
import { ProfilePage } from "@/components";
import { useAuth } from "@/context/AuthContext";
import { toast } from "sonner";

function ProfileHomePage() {
  const router = useRouter();
  const { isLoggedIn, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading && !isLoggedIn) {
      toast.error("Please Log In.", { id: "auth-required" });
      router.replace("/auth/login");
    }
  }, [isLoading, isLoggedIn, router]);

  if (isLoading || !isLoggedIn) return null;

  return <ProfilePage />;
}

export default ProfileHomePage;
