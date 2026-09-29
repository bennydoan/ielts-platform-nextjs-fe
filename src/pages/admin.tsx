import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

function AdminPage() {
  const router = useRouter();
  const [isAllowed, setIsAllowed] = useState(false);

  useEffect(() => {
    fetch(`${API_URL}/api/admin/homePage`, {
      credentials: "include",
    }).then((res) => {
      if (res.status === 401) {
        router.replace("/auth/login");
      } else if (res.status === 403) {
        router.replace("/");
      } else if (res.ok) {
        setIsAllowed(true);
      }
    });
  }, [router]);

  if (!isAllowed) return null;

  return <p>admin</p>;
}

export default AdminPage;
