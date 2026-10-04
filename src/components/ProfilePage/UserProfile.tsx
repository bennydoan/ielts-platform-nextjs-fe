import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { getProfile, updateProfile, changePassword } from "@/libs/profile";
import { toast } from "sonner";

function UserProfileComponent() {
  const [content, setContent] = useState<string>("updateProfile");
  // define what elements are in the profile form
  type ProfileForm = {
    phoneNumber: string;
    dateOfBirth: string;
  };

  type PasswordForm = {
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
  };

  const [info, setInfo] = useState({ fullName: "", email: "" });

  // shared style of every INput
  const inputClass =
    "border border-gray-300 rounded-md px-3 py-2 text-black focus:outline-none focus:border-[#F5222D]";

  //Profile form
  const profileForm = useForm<ProfileForm>();
  const { reset } = profileForm;
  const pErr = profileForm.formState.errors;

  //Change password form

  const passwordForm = useForm<PasswordForm>();
  const pwErr = passwordForm.formState.errors;

  useEffect(() => {
    getProfile()
      .then((p) => {
        setInfo({ fullName: p.fullName, email: p.email });
        reset({
          phoneNumber: p.phoneNumber ?? "",
          dateOfBirth: p.dateOfBirth ?? "",
        });
      })
      .catch(() => toast.error("Could not load profile"));
  }, [reset]);

  async function onSaveProfile(data: ProfileForm) {
    try {
      await updateProfile({
        phoneNumber: data.phoneNumber || null,
        dateOfBirth: data.dateOfBirth || null,
      });
      toast.success("Cập nhật thành công");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  // function changePassword

  async function onChangePassword(data: PasswordForm) {
    try {
      await changePassword({
        currentPassword: data.currentPassword,
        newPassword: data.newPassword,
      });
      passwordForm.reset(); // clear the 3 password inputs
      toast.success("Đổi mật khẩu thành công");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  return (
    <div className="p-20 lg:w-[70%] w-full flex flex-col">
      <div className=" pb-6 border-b ">
        <h1 className="text-black font-bold text-3xl">Hồ sơ cá nhân</h1>
      </div>

      <div className="mt-2 flex gap-5">
        <button
          type="button"
          // className=""
          className={
            content === "updateProfile"
              ? "bg-gray-100 text-black font-bold px-4 py-2 rounded-md cursor-pointer hover:bg-gray-200"
              : "text-black font-bold px-4 py-2 rounded-md cursor-pointer hover:bg-gray-200"
          }
          onClick={() => setContent("updateProfile")}
        >
          Thông tin cơ bản
        </button>

        <button
          type="button"
          className={
            content === "changePassword"
              ? "bg-gray-100 text-black font-bold px-4 py-2 rounded-md cursor-pointer hover:bg-gray-200"
              : "text-black font-bold px-4 py-2 rounded-md cursor-pointer hover:bg-gray-200"
          }
          onClick={() => setContent("changePassword")}
        >
          Đổi mật khẩu
        </button>
      </div>

      {content === "updateProfile" && (
        <form
          onSubmit={profileForm.handleSubmit(onSaveProfile)}
          className="mt-3 flex flex-col gap-3"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="fullName" className="text-black font-semibold">
              Tên Người Dùng
            </label>
            <input
              id="fullName"
              type="text"
              className={inputClass}
              readOnly
              value={info.fullName}
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
                max={new Date().toISOString().split("T")[0]} // no future dates
                className={inputClass}
                {...profileForm.register("dateOfBirth")}
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
                className={inputClass}
                {...profileForm.register("phoneNumber", {
                  pattern: {
                    value: /^0\d{9}$/,
                    message: "Số điện thoại phải có 10 số và bắt đầu bằng 0",
                  },
                })}
              />
              {pErr.phoneNumber && (
                <p className="text-red-500">{pErr.phoneNumber.message}</p>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-black font-semibold">
              Email
            </label>
            <input
              id="email"
              type="email"
              className={inputClass}
              readOnly
              value={info.email}
            />
          </div>

          <button
            type="submit"
            onSubmit={profileForm.handleSubmit(onSaveProfile)}
            disabled={profileForm.formState.isSubmitting}
            className="mt-2 bg-black text-white font-medium rounded-md px-6 py-2 w-[150px] cursor-pointer"
          >
            {profileForm.formState.isSubmitting
              ? "Đang lưu..."
              : "Lưu thay đổi"}
          </button>
        </form>
      )}

      {/* ------------------------ second form ----------------------------------- */}
      {content === "changePassword" && (
        <form
          onSubmit={passwordForm.handleSubmit(onChangePassword)}
          className="mt-8 flex flex-col gap-3"
        >
          <div className="flex flex-col gap-2">
            <label
              htmlFor="currentPassword"
              className="text-black font-semibold"
            >
              Mật khẩu cũ
            </label>
            <input
              id="currentPassword"
              type="password"
              autoComplete="current-password"
              placeholder="Nhập mật khẩu cũ"
              className={inputClass}
              {...passwordForm.register("currentPassword", {
                required: "Vui lòng nhập mật khẩu cũ",
              })}
            />
            {pwErr.currentPassword && (
              <p className="text-red-500">{pwErr.currentPassword.message}</p>
            )}
          </div>

          <div className="w-full flex justify-between">
            <div className="flex flex-col gap-2 w-[45%]">
              <label htmlFor="newPassword" className="text-black font-semibold">
                Mật khẩu mới
              </label>
              <input
                id="newPassword"
                type="password"
                autoComplete="new-password"
                placeholder="Nhập mật khẩu mới"
                className={inputClass}
                {...passwordForm.register("newPassword", {
                  required: "Vui lòng nhập mật khẩu mới",
                  pattern: {
                    value:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    message:
                      "Password must be at least 8 characters and contain uppercase, lowercase, number, and special character",
                  },
                })}
              />
              {pwErr.newPassword && (
                <p className="text-red-500">{pwErr.newPassword.message}</p>
              )}
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
                autoComplete="new-password"
                placeholder="Nhập lại mật khẩu"
                className={inputClass}
                {...passwordForm.register("confirmPassword", {
                  required: "Vui lòng xác nhận mật khẩu",
                  validate: (value, form) =>
                    value === form.newPassword || "Mật khẩu không khớp",
                })}
              />
              {pwErr.confirmPassword && (
                <p className="text-red-500">{pwErr.confirmPassword.message}</p>
              )}
            </div>
          </div>

          <button
            type="submit"
            disabled={passwordForm.formState.isSubmitting}
            className="mt-2 bg-black text-white font-medium rounded-md px-6 py-2 w-[150px] cursor-pointer"
          >
            {passwordForm.formState.isSubmitting
              ? "Đang lưu..."
              : "Đổi mật khẩu"}
          </button>
        </form>
      )}
    </div>
  );
}

export default UserProfileComponent;
