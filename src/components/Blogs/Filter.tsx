import { BlogCategory } from "@/data/Blogs";

type Props = {
  selectedCategories: BlogCategory[];
  onFilter: (category: BlogCategory[]) => void;
};

function Filter({ selectedCategories, onFilter }: Props) {
  function handleCheck(category: BlogCategory) {
    if (selectedCategories.includes(category)) {
      onFilter(selectedCategories.filter((c) => c !== category)); // avoid duplication, handling unchecked
    } else {
      onFilter([...selectedCategories, category]);
    }
  }
  return (
    <div className="w-[280px] lg:mt-25">
      <div className="border-b border-gray-300 pb-4 mb-4">
        <h1 className="text-black text-3xl font-bold">Bộ lọc</h1>
      </div>
      <div className="flex flex-col">
        {Object.values(BlogCategory).map((category) => {
          return (
            <div key={category} className="flex items-center gap-2 pb-2">
              <input
                type="checkbox"
                id={category}
                checked={selectedCategories.includes(category)}
                onChange={() => {
                  handleCheck(category);
                }}
                className="w-4 h-4 cursor-pointer accent-[#FF2D38]"
              />
              <label
                htmlFor={category}
                className="text-black text-sm cursor-pointer"
              >
                {category}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Filter;
