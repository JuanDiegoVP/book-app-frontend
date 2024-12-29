import { FiShoppingCart } from "react-icons/fi";
import { getImgUrl } from "../../utils/getImgUrl";
import { Link } from "react-router";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cart/cartSlice";

const BookCard = ({ book }) => {
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className=" rounded-lg transition-shadow duration-300">
      <div className="flex flex-col sm:flex-row sm:items-center sm:h-60 sm:justify-center gap-4">
        <div className="sm:h-full sm:flex-shrink-0 border rounded-md">
          <Link to={`/books/${book._id}`}>
            <img
              src={`${getImgUrl(book.coverImage)}`}
              alt=""
              className="w-full bg-cover p-2 rounded-md cursor-pointer hover:scale-105 transition-all duration-200"
            />
          </Link>
        </div>

        <div>
          <Link to={`/books/${book._id}`}>
            <h3 className="text-lg font-semibold hover:text-blue-600 mb-1 min-[768px]:text-[15px]">
              {book.title}
            </h3>
          </Link>
          <p className="text-gray-600 text-sm mb-2 p-[1px] min-[768px]:text-[11px]">
            {book.description.length > 50
              ? `${book.description.slice(0, 50)}...`
              : book.description}
          </p>
          <p className="font-medium mb-2 min-[1024px]:text-[12px]">
            ${book?.newPrice}{" "}
            <span className="line-through font-normal ml-2">
              ${book?.oldPrice}
            </span>
          </p>
          <button
            onClick={() => handleAddToCart(book)}
            className="bg-primary rounded-md px-[2rem] py-[0.5rem] space-x-1 flex items-center gap-1 min-[1180px]:px-[2rem] min-[1024px]:px-[.5rem] min-[768px]:px-[1.5rem]"
          >
            <FiShoppingCart className=" shrink-0 min-[1024px]:size-3"/>
            <span className="min-[1024px]:text-[10px] min-[768px]:text-[12px] font-semibold">Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
