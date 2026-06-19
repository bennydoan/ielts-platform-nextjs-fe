import Blogs, { BlogCategory } from "@/data/Blogs";
import Link from "next/link";
import Image from "next/image";
import Pagination from "./Pagination";
import { useState, useEffect } from "react";

type Props = {
  selectedCategories: BlogCategory[];
};

function BlogContent({ selectedCategories }: Props) {
  //sort
  const [sort, setSort] = useState("newest");

  //filter function
  const filteredBlogs =
    selectedCategories.length === 0
      ? Blogs
      : Blogs.filter((b) => selectedCategories.includes(b.category));
  const item_per_page = 8;

  const [currentPage, setCurrenPage] = useState(1);

  useEffect(() => {
    setCurrenPage(1);
  }, [selectedCategories, sort]);

  const totalPages = Math.ceil(filteredBlogs.length / item_per_page);
  // slice the array upto  currentPage * item_per_page, but not include  currentPage * item_per_page,
  const shownBlogsPerPage = filteredBlogs
    .slice()
    .sort((a, b) => {
      if (sort === "newest")
        return b.dateCreated.getTime() - a.dateCreated.getTime(); // get time converts "2024-01-01" → 1704067200000

      if (sort === "oldest")
        return a.dateCreated.getTime() - b.dateCreated.getTime();
      if (sort === "A-Z") return a.blogName.localeCompare(b.blogName);
      return b.blogName.localeCompare(a.blogName); // Z-A
    })
    .slice((currentPage - 1) * item_per_page, currentPage * item_per_page);
  return (
    <div className="flex flex-col w-full">
      {/* Page Control */}
      <div className="flex flex-col sm:flex-row gap-2 items-center my-5 md:my-10 lg:my-4 ml-auto ">
        <p className="text-gray-500">
          Hiển thị {(currentPage - 1) * item_per_page + 1}-
          {Math.min(currentPage * item_per_page, filteredBlogs.length)} trên
          tổng {filteredBlogs.length} bài viết
        </p>

        <div className="flex items-center ">
          <p className="text-black text-center">Sắp xếp theo:</p>
          <select
            value={sort}
            className="py-2 text-black font-bold outline-none"
            onChange={(e) => {
              setSort(e.target.value);
              setCurrenPage(1); // ✅ reset to page 1 // return to page 1
            }}
          >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
          </select>
        </div>
      </div>

      {/* Content */}
      {/* less than small breakpoint */}
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 md:gap-7 sm:gap-2 lg:order-3">
        {shownBlogsPerPage.map((blog) => {
          return (
            <Link key={blog.id} href="/" className=" flex flex-col gap-2 ">
              <div className="w-full h-[250px] rounded-lg overflow-hidden relative">
                <Image
                  src={`${blog.img}`}
                  fill
                  alt={`${blog.blogName}`}
                  className="object-cover"
                />
              </div>

              <h1 className="text-black font-bold">{blog.blogName}</h1>
              <p className=" mt-2 text-gray-500">
                {blog.dateCreated.toLocaleString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: false,
                })}
              </p>
            </Link>
          );
        })}
      </div>

      {/* Page Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPage={totalPages}
        onPageChange={setCurrenPage}
      />
    </div>
  );
}

export default BlogContent;
