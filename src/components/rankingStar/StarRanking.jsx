import { FaStar } from "react-icons/fa";
import { FiStar } from "react-icons/fi";
const StarRanking = ({ ranking, setRanking }) => {
  const indexStart = (index) => {
    setRanking(index + 1);
  };
  return (
    <div className="star-container">
      {[...new Array(5)].map((star, index) => {
        return index < ranking ? (
          <FaStar
            icon="fa-solid fa-star"
            className="bg-white"
            style={{ cursor: "pointer" }}
            key={index}
            onClick={() => indexStart(index)}
          />
        ) : (
          <FiStar
            icon="fa-regular fa-star"
            key={index}
            style={{ cursor: "pointer" }}
            onClick={() => indexStart(index)}
          />
        );
      })}
    </div>
  );
};

export default StarRanking;
