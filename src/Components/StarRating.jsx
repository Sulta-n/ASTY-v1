import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const StarRating = ({ rating }) => {
  const fullStar = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStar = 5 - fullStar - (halfStar ? 1 : 0);
  return (
    <div
      className="flex gap-x-2.5"
      aria-label={`Rated ${rating} out of 5 stars`}
    >
      {[...Array(fullStar)].map((_, i) => (
        <FaStar key={`full-${i}`} className="text-primary" />
      ))}
      {halfStar && <FaStarHalfAlt key="half" className="text-primary" />}
      {[...Array(emptyStar)].map((_, i) => (
        <FaRegStar key={`empty-${i}`} className="text-white/20" />
      ))}
    </div>
  );
};

export default StarRating;
