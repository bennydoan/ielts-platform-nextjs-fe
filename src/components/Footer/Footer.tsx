import Image from "next/image";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-white  border-neutral-7 md:mx-auto lg:px-39 md:px-24 px-5 md:py-15 py-10 flex flex-col gap-10">
      <div className="flex flex-col xl:flex-row justify-between gap-5">
        {/* first Div */}
        <div>
          <div className="flex flex-col gap-6 order-1 lg:order-none">
            <Link href="/">
              <Image
                alt="NhanVanLogo"
                src="/images/NhanVanLogo.svg"
                height={116}
                width={124}
              />
            </Link>

            <div className="flex flex-row gap-2">
              <Link
                href="https://www.facebook.com/nhanvaneducation"
                // create a new tab
                target="_blank"
                //security
                rel="noopener noreferrer"
                className="text-black flex items-center gap-2 flex-shrink-0"
              >
                <FaFacebook size={25} color="#8c8c8c" />
                <span className="text-[#8c8c8c]">Facebook</span>
              </Link>
            </div>
          </div>
        </div>

        {/* second div */}
        <div className="flex flex-col lg:flex-row gap-10 lg:justify-between w-full">
          {/* for map */}
          <div className="h-[170px] w-full lg:max-w-[280px] 2xl:max-w-[500px] order-2 mx-auto lg:order-1">
            <iframe
              title="Pima Location"
              className="w-full h-full border-0 shadow-md"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.819345508739!2d106.60679517583927!3d10.901330156875765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d5ea44e4bd19%3A0x57c9b1af25f319e0!2sNHAN%20VAN%20EDUCATION!5e0!3m2!1svi!2s!4v1750223233812!5m2!1svi!2s"
            ></iframe>
          </div>

          {/* for the menu */}
          <div className="flex flex-row lg:gap-10 justify-between lg:justify-center lg:order-2">
            {/* left div  */}
            <div className="flex flex-col gap-4">
              <h3 className="text-black font-bold">MENU</h3>
              <ul>
                <li>
                  <Link
                    href="/about-us"
                    className="text-black hover:text-[#F5222D]"
                  >
                    Về chúng tôi
                  </Link>
                </li>

                <li>
                  <Link
                    href="/blogs"
                    className="text-black hover:text-[#F5222D]"
                  >
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.facebook.com/nhanvaneducation"
                    className="text-black hover:text-[#F5222D]"
                  >
                    Liên hệ
                  </Link>
                </li>

                <li>
                  <Link
                    href="/offline-course"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#F5222D] hover:underline"
                  >
                    Tham gia cộng đồng
                  </Link>
                </li>
              </ul>
            </div>

            {/* Right div */}

            <div className="flex flex-col gap-4">
              <h3 className="text-black font-bold">THI THỬ</h3>
              <ul>
                <li>
                  <Link
                    href="https://www.facebook.com/nhanvaneducation"
                    className="text-black hover:text-[#F5222D]"
                  >
                    Bài nghe
                  </Link>
                </li>
                <li className="text-[#8c8c8c] hover:text-[#F5222D] cursor-not-allowed">
                  Bài Viết(comming Soon)
                </li>
                <li className="text-[#8c8c8c] hover:text-[#F5222D] cursor-not-allowed">
                  Bài Đọc(comming Soon)
                </li>
                <li className="text-[#8c8c8c] hover:text-[#F5222D] cursor-not-allowed">
                  Bài Nghe(comming Soon)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between border-t border-black pt-6 ">
        <p className="text-black">
          © 2025 NhanVan Education, Inc. All rights reserved
        </p>

        <Link href="/privacy-policy" className="text-[#F5222D]">
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
