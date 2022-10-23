import { BsFillStarFill } from 'react-icons/bs';
import { FaRegStar } from 'react-icons/fa';

export const ProductReview = ({ stars, count }) => {
  return (
    <div className="flex flex-col md:flex-row gap-2 my-2">
      <div className="flex  pt-1">
        {Array(5)
          .fill('_')
          .map((_, index) => {
            return index < Math.round(stars) ? (
              <BsFillStarFill
                className="text-zinc-700"
                key={index}
              ></BsFillStarFill>
            ) : (
              <FaRegStar className="text-zinc-700" key={index}></FaRegStar>
            );
          })}
      </div>
      <div>
        {stars} {`(${count}  reviews) `}
      </div>
    </div>
  );
};
