import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { Toaster } from "sonner";

const noLayoutRoutes = ["/ielts-tests/[category]/[TestID]"];

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const hideLayout = noLayoutRoutes.includes(router.pathname);

  return (
    <>
      {!hideLayout && <Header />}
      <Component {...pageProps} />
      {!hideLayout && <Footer />}
      <Toaster position="top-right" />
    </>
  );
}
