import BlogBox from "./BlogBox";
function BlogHomePage() {
  return (
    <div className="bg-white w-full md:pt-40 flex flex-col gap-16">
      <div className="bg-[#D7EFF2] w-[95%] md:h-[160px] h-[130px] mx-auto rounded-xl flex items-center justify-center">
        <h1 className="text-black text-4xl md:text-5xl font-bold mx-auto ">
          Blogs
        </h1>
      </div>

      {/* second div */}
      <BlogBox />
    </div>
  );
}

export default BlogHomePage;
