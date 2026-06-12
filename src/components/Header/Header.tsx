"use client";

import Link from "next/link";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

import { useState, useEffect } from "react";

function Header() {
  // State for button clicking
  const [isClicked, setIsClicked] = useState<boolean>(false);

  function handleClick() {
    setIsClicked(true);
  }

  // handle the menu when the size is back from lg ->medium

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsClicked(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="flex  justify-between bg-white items-center relative h-[116px] px-5">
      <Link href="/" className="hidden lg:block absolute left-7 top-2">
        <Image
          alt="NhanVanLogo"
          width={200}
          height={200}
          src={"/images/NhanVanLogo.svg"}
        />
      </Link>

      <ul className="hidden lg:flex space-x-8 items-center absolute left-1/2 -translate-x-1/2">
        <li>
          <Link
            className={`font-semibold hover:text-[#F5222D] md:text-base lg:text-lg text-black`}
            href="/exam-library"
          >
            Thư viện đề thi
          </Link>
        </li>
        <li>
          <Link
            className={` hover:text-[#F5222D] font-semibold md:text-base lg:text-lg text-black`}
            href="/about-us"
          >
            Về chúng tôi
          </Link>
        </li>
        <li>
          <Link
            className={`font-semibold hover:text-[#F5222D] md:text-base lg:text-lg text-black`}
            href="/Blogs"
          >
            Blogs
          </Link>
        </li>
      </ul>

      <div className="hidden lg:flex items-center gap-6 ml-auto">
        <Link
          href="/offline-course"
          className={`text-[#F5222D] font-semibold text-body-2 hover:underline max-w-36 text-center`}
        >
          Đăng ký <br /> học trực tiếp
        </Link>

        <Link
          href="/auth/login"
          className={`bg-[#F5222D] text-white text-body leading-[21px] px-6 py-2 rounded-md  hover:opacity-80 cursor-pointer min-h-10`}
        >
          Đăng nhập
        </Link>
      </div>

      {/* Mobile Screen */}

      <Link href="/" className="lg:hidden ">
        <Image
          alt="NhanVanLogo"
          width={80}
          height={80}
          src={"/images/NhanVanLogo.svg"}
        />
      </Link>
      <button className="lg:hidden text-black text-3xl" onClick={handleClick}>
        <GiHamburgerMenu />
      </button>

      {/* this is the Menu in mobile mode  */}
      <div
        className={`lg:hidden fixed inset-0 z-50 bg-white flex flex-col items-center px-7 py-6 transition-all duration-800 ${
          isClicked
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <button
          className="text-black text-3xl absolute right-5 top-10"
          onClick={() => setIsClicked(false)}
        >
          <IoMdClose />
        </button>

        <Link href="/">
          <Image
            alt="NhanVanLogo"
            width={120}
            height={120}
            src={"/images/NhanVanLogo.svg"}
          />
        </Link>

        <div className="flex flex-col gap-3 mt-5 w-full">
          <Link
            className={`border border-neutral-5 rounded-lg py-2 text-center text-black`}
            href="/exam-library"
            onClick={() => setIsClicked(false)}
          >
            Thư viện đề thi
          </Link>
          <Link
            className={` border border-neutral-5 rounded-lg py-2 text-center text-black`}
            href="/about-us"
            onClick={() => setIsClicked(false)}
          >
            Về chúng tôi
          </Link>
          <Link
            className={`$border border-neutral-5 rounded-lg py-2 text-center text-black`}
            href="/Blogs"
            onClick={() => setIsClicked(false)}
          >
            Blogs
          </Link>

          <div className="flex flex-col items-center w-full pt-8 gap-2">
            <Link
              className={`font-semibold text-[#F5222D]`}
              href="/offline-course"
              onClick={() => setIsClicked(false)}
            >
              Join Our Offline Course
            </Link>
            <Link
              className={` bg-[#F5222D] text-white w-full text-center py-2 rounded-md font-medium`}
              href="/auth/login"
              onClick={() => setIsClicked(false)}
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
