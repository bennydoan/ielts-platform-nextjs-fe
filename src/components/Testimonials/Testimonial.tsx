import StudentFeedback from "./studentFeedback";
function Testimonial() {
  return (
    <div className="bg-[#F9F9F9] w-full h-auto relative">
      <div className="py-10 lg:py-14 max-w-[1440px] h-full mx-auto">
        <div className="w-[90%] lg:w-[81%] mx-auto px-[10%]">
          <div className="flex flex-col gap-7 lg:flex-row items-center justify-center">
            {/* header */}
            <div className="lg:w-[50%] w-full">
              <h3 className="text-black text-3xl lg:text-5xl font-bold">
                Những chia sẻ của học viên
              </h3>
            </div>

            {/* Feedback &userInfo */}
            <StudentFeedback />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
