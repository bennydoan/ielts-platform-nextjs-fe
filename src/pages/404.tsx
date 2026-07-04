import Image from "next/image";
import Link from "next/link";
function Custom404() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center gap-5 py-30">
      <div className="relative sm:w-[300px] w-[200px] sm:h-[300px] h-[200px]">
        <Image
          src="/images/404/404img.webp"
          alt="Page not found"
          fill
          className="object-contain"
        />
      </div>
      <div className="flex flex-col gap-3 justify-center items-center">
        <p className="text-[#f5222d] font-bold text-4xl">Oops !</p>
        <p className="text-black">
          The page you are looking for does not exist
        </p>
        <Link
          href="/"
          className={`bg-[#F5222D] text-white text-body leading-[21px] px-6 py-2 rounded-md  hover:opacity-80 cursor-pointer min-h-10`}
        >
          Go back home
        </Link>
      </div>
    </div>
  );
}

export default Custom404;
