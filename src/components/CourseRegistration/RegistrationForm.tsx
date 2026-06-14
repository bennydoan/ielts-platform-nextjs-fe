import Image from "next/image";
import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  email: string;
  phoneNumber: string;
  bandTarget: number;
};

function RegistrationForm() {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  function onSubmit(data: FormData) {
    console.log(data);
    reset();
  }

  return (
    <div className=" w-full 2xl:w-[1387px] bg-[#d5eddb] border rounded-lg p-[40px] flex flex-col items-center 2xl:mx-auto">
      <div className="flex flex-col sm:max-w-[300px] md:max-w-[489px] gap-4">
        <h1 className="text-black text-2xl md:text-3xl text-center font-bold ">
          Đăng ký ngay để nhận ưu đãi hấp dẫn
        </h1>
        <p className="text-center text-black">
          Hãy điền thông tin để giữ chỗ và nhận thông báo sớm nhất về khuyến mãi
          và lịch học mới.
        </p>
      </div>

      <div className="mt-6 relative flex flex-col gap-4 bg-white border border-gray rounded-xl sm:w-[300px] md:w-[600px] lg:w-[500px] p-6 mx-auto overflow-hidden">
        {/* background illustrations */}
        <Image
          src="/images/Course/Illustration1.svg"
          alt=""
          width={300}
          height={300}
          className="absolute top-0 left-0 opacity-100 pointer-events-none w-[300px] h-[300px]"
        />
        <Image
          src="/images/Course/Illustration2.svg"
          alt=""
          width={300}
          height={300}
          className="absolute bottom-0 right-0 opacity-100 pointer-events-none w-[300px] h-[300px]"
        />

        <h1 className=" relative z-10 text-black text-lg 2xl:text-xl text-left font-bold ">
          ĐĂNG KÝ KHÓA HỌC OFFLINE
        </h1>
        <form
          className=" relative z-10 flex flex-col gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-1">
            <label className="text-black text-sm font-medium">Họ Và Tên</label>
            <input
              {...register("name", {
                required: "Name is required !",
                pattern: {
                  value: /^[A-Za-z]+$/,
                  message: "Only letters are allowed",
                },
              })}
              placeholder="Nhập họ tên"
              className="w-full h-[42px] border border-gray-300 rounded-lg px-4 text-black outline-none focus:border-[#FF2D38] transition"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-black text-sm font-medium">Email</label>
            <input
              {...register("email", {
                required: "Email is required !",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Invalid email address",
                },
              })}
              placeholder="Nhập địa chỉ email"
              type="email"
              className="w-full h-[42px] border border-gray-300 rounded-lg px-4 text-black outline-none focus:border-[#FF2D38] transition"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-black text-sm font-medium">
              Số Điện Thoại
            </label>
            <input
              {...register("phoneNumber", {
                required: "Phone number is required !",
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Only numbers are allowed",
                },
              })}
              placeholder="Nhập số điện thoại của bạn"
              type="tel"
              className="w-full h-[42px] border border-gray-300 rounded-lg px-4 text-black outline-none focus:border-[#FF2D38] transition"
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-sm">
                {errors.phoneNumber.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-black text-sm font-medium">
              Mục Tiêu Điểm IELTS
            </label>
            <input
              type="number"
              step="0.5"
              {...register("bandTarget", {
                required: "Target is required",
                min: {
                  value: 0,
                  message: "Score must be greater than 0",
                },
                max: {
                  value: 9,
                  message: "Score must be less than 9",
                },
              })}
              placeholder="Nhập số điện thoại của bạn"
              className="w-full h-[42px] border border-gray-300 rounded-lg px-4 text-black outline-none focus:border-[#FF2D38] transition"
            />
            {errors.bandTarget && (
              <p className="text-red-500 text-sm">
                {errors.bandTarget.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full h-[42px] bg-black text-white rounded-lg font-bold hover:opacity-80 transition mt-2"
          >
            Đăng ký ngay
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;
