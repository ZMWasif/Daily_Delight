import { useNavigate } from "react-router-dom";
import "./FoodMenu.css";

const FoodMenu = ({ food }) => {
  const { _id, name, img } = food;
  const navigate = useNavigate();

  const navigateTofoodDetail = (_id) => {
    navigate(`/foods/${_id}`);
  };

  return (
    <div className="food">
      <img className="food" src={img} alt="" />
      <button onClick={() => navigateTofoodDetail(_id)} className="food-btn">
        {name}
      </button>
    </div>
  );
};

export default FoodMenu;
