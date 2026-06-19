import { GrFormPreviousLink } from "react-icons/gr";
import { GrFormNextLink } from "react-icons/gr";

type Props = {
  currentPage: number;
  totalPage: number;
  onPageChange: (page: number) => void;
};
function Pagination({ currentPage, totalPage, onPageChange }: Props) {
  return (
    <div className="flex gap-2 justify-center my-10 lg:mt-0 lg:ml-auto">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className=" flex items-center gap-2 px-4 py-2 border rounded-lg disabled:opacity-50"
      >
        <GrFormPreviousLink className="text-black" />
        <p className="text-black hidden lg:block">Trước</p>
      </button>

      {/* create an array with totalPage length */}

      {Array.from({ length: totalPage }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={` text-black px-4 py-2 rounded-lg ${currentPage === page ? "bg-gray-300 text-black" : ""}`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPage}
        className=" flex items-center gap-2 px-4 py-2 border rounded-lg disabled:opacity-50"
      >
        <GrFormNextLink className="text-black" />
        <p className="text-black hidden lg:block">Sau</p>
      </button>
    </div>
  );
}
export default Pagination;
