import Link from "next/link";
type props = {
  buttonName: string;
  href: string;
  text: string;
  actionLink: string;
};

function SubmitButton({ buttonName, href, text, actionLink }: props) {
  return (
    <div className="w-full flex flex-col items-center gap-3">
      <button
        type="submit"
        className="bg-[#F5222D] text-white leading-[21px] px-6 py-2 rounded-md hover:opacity-80 cursor-pointer w-full h-[42px]"
      >
        {buttonName}
      </button>

      <p className="text-black font-medium">
        {text}{" "}
        <Link href={href} className="text-[#F5222D] font-medium">
          {actionLink}
        </Link>
      </p>
    </div>
  );
}

export default SubmitButton;
