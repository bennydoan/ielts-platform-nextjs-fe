import TeamImageComponent from "./TeamImageComponent";
import FeatureContainer from "./FeatureContainer";
import WhyChoosingUs from "../AboutUsComponent/WhyChoosingUs";
import RegistrationForm from "./RegistrationForm";
function RegistrationPage() {
  return (
    <div className="h-auto bg-white flex flex-col items-center">
      <div className="w-full flex flex-col gap-16">
        <TeamImageComponent />
        <div className="px-10 w-full flex flex-col gap-16 lg:w-[95%] xl:w-[90%] mx-auto">
          <WhyChoosingUs
            text1="Chúng tôi mang đến giải pháp kiểm tra và luyện thi ngôn ngữ trong không gian được trang bị công nghệ hiện đại. "
            text2="Các phòng học cách âm và không khí học tập thân thiện, nhiều màu sắc giúp bạn luôn cảm thấy thoải mái và tự tin."
          />
          <FeatureContainer />
          <div id="registration-form">
            <RegistrationForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistrationPage;
