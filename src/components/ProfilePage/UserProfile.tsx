function UserProfileComponent() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // form submission logic goes here later
  };
  return (
    <div className="p-20 lg:w-[70%] w-full flex flex-col">
      <div className=" pb-6 border-b ">
        <h1 className="text-black font-bold text-3xl">Hồ sơ cá nhân</h1>
      </div>

      <form onSubmit={handleSubmit} className="mt-3 flex flex-col gap-3">
        <h1 className="text-black font-bold">Thông tin cơ bản</h1>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <label htmlFor="fullName" className="text-black font-semibold">
              Tên Người Dùng
            </label>
            <input
              id="fullName"
              type="text"
              placeholder="Tên hiển thị của bạn"
              className="border border-gray-300 rounded-md px-3 py-2 text-black focus:outline-none focus:border-[#F5222D]"
            />
          </div>

          <div className="w-full flex justify-between">
            <div className="flex flex-col gap-2 w-[45%]">
              <label htmlFor="dob" className="text-black font-semibold">
                Ngày sinh
              </label>
              <input
                id="dob"
                type="date"
                placeholder="DOB"
                className="border border-gray-300 rounded-md px-3 py-2 text-black focus:outline-none focus:border-[#F5222D]"
              />
            </div>

            <div className="flex flex-col gap-2 w-[45%]">
              <label htmlFor="phoneNumber" className="text-black font-semibold">
                Số điện thoại
              </label>
              <input
                id="phoneNumber"
                type="tel"
                placeholder="Nhập số điện thoại"
                className="border border-gray-300 rounded-md px-3 py-2 text-black focus:outline-none focus:border-[#F5222D]"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-black font-semibold">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Nhập địa chỉ email"
              className="border border-gray-300 rounded-md px-3 py-2 text-black focus:outline-none focus:border-[#F5222D]"
            />
          </div>

          <div className="w-full flex justify-between">
            <div className="flex flex-col gap-2 w-[45%]">
              <label htmlFor="password" className="text-black font-semibold">
                Mật khẩu
              </label>
              <input
                id="password"
                type="password"
                placeholder="Nhập mật khẩu"
                className="border border-gray-300 rounded-md px-3 py-2 text-black focus:outline-none focus:border-[#F5222D]"
              />
            </div>

            <div className="flex flex-col gap-2 w-[45%]">
              <label
                htmlFor="confirmPassword"
                className="text-black font-semibold"
              >
                Xác nhận mật khẩu
              </label>
              <input
                id="confirmPassword"
                type="password"
                placeholder="Nhập lại mật khẩu"
                className="border border-gray-300 rounded-md px-3 py-2 text-black focus:outline-none focus:border-[#F5222D]"
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="mt-2 bg-black text-white font-medium rounded-md px-6 py-2 w-[150px] cursor-pointer"
        >
          Lưu thay đổi
        </button>
      </form>
    </div>
  );
}

export default UserProfileComponent;
