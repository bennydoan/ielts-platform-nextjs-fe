import Navigation from "./Navigation";
import UserProfileComponent from "./UserProfile";
import ResultAnalysis from "./TestAnalysis";
import { useState } from "react";
function ProfilePage() {
  const [active, setActive] = useState<"profile" | "analysis">("profile");
  return (
    <div className="bg-[#f5f5f5] h-auto w-full py-18 px-10">
      <div className="bg-white w-full h-auto flex lg:flex-row flex-col">
        {/* first div  */}
        <Navigation active={active} setActive={setActive} />
        {active === "profile" ? <UserProfileComponent /> : <ResultAnalysis />}
      </div>
    </div>
  );
}

export default ProfilePage;
