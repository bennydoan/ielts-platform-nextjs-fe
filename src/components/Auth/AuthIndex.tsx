import React, { ReactNode } from "react";

function AuthIndex({ children }: { children: ReactNode }) {
  // ReactNode is a type that can be rendered by React in any type
  return (
    <div className="w-full flex justify-center items-center p-[40px] bg-white h-[735px] ">
      <div className=" flex flex-col gap-10 justify-center items-center">
        {/* welcoming text */}
        <div className="flex flex-col justify-center items-center">
          <p className="text-black font-bold">Welcome To</p>
          <p className="poppins-regular tracking-wide text-[#FF2D38] text-3xl">
            Nhan Van Education
          </p>
        </div>

        {children}
      </div>
    </div>
  );
}

export default AuthIndex;
