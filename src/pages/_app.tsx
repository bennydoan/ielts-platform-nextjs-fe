import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { Toaster } from "sonner";
import { AuthProvider } from "@/context/AuthContext";

const noLayoutRoutes = ["/ielts-tests/[category]/[TestID]"];

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const hideLayout = noLayoutRoutes.includes(router.pathname);

  return (
    <AuthProvider>
      {!hideLayout && <Header />}
      <Component {...pageProps} />
      {!hideLayout && <Footer />}
      <Toaster position="top-right" />
    </AuthProvider>
  );
}
