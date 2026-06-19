import Filter from "./Filter";
import BlogContent from "./BlogContent";
import Blogs, { BlogCategory } from "@/data/Blogs";
import { useState } from "react";
function BlogBox() {
  const [selectedCategories, setSelectedCategories] = useState<BlogCategory[]>(
    [],
  );

  return (
    <div className="w-[95%] mx-auto lg:flex gap-20">
      {Blogs.length === 0 ? (
        <p className="text-gray-500 text-center py-20 w-full">Coming Soon</p>
      ) : (
        <>
          <Filter
            selectedCategories={selectedCategories}
            onFilter={setSelectedCategories}
          />
          <BlogContent selectedCategories={selectedCategories} />
        </>
      )}
    </div>
  );
}

export default BlogBox;
