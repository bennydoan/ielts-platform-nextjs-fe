import Link from "next/link";
type ModeCardProps = {
  title: string;
  description: string;
  href: string;
  children: React.ReactNode; // receive anything React can render
};

function ModeCard({ title, description, children, href }: ModeCardProps) {
  return (
    <div className="p-2 px-3 border-2 w-auto md:w-[400px] lg:h-[380px] xl:h-[330px] rounded-md flex flex-col gap-4 shadow-lg">
      <h1 className="text-[#F5222D] text-xl font-semibold text-center">
        {title}
      </h1>
      <p className="text-black font-bold">{description}</p>
      {children}
      <Link
        href={href}
        className="w-[40%] self-center text-center bg-[#F5222D] text-white py-2 rounded-lg font-bold hover:opacity-80 transition cursor-pointer"
      >
        Start test
      </Link>
    </div>
  );
}

export default ModeCard;
