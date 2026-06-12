import dynamic from "next/dynamic";
import ContentContainer from "./ContentContainer";
const HeroSection = dynamic(() => import("./HeroSection"), { ssr: false });
function AboutUs() {
  return (
    <div className="bg-white lg:pt-[130px] flex flex-col justify-center items-center ">
      <HeroSection />
      <ContentContainer />
    </div>
  );
}

export default AboutUs;
