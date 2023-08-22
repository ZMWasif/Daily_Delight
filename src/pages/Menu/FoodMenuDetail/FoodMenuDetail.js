import React from "react";
import { Link, useParams } from "react-router-dom";
import useFood from "../../../hooks/useFood";

const FoodMenuDetail = () => {
  const { foodId } = useParams();
  const [food] = useFood(foodId);

  return (
    <div>
      <h2>Welcome to the details of: {food.name}</h2>
      <div className="text-center">
        <Link to={`/checkout/${foodId}`}>
          <button className="btn btn-primary">Proceed Further</button>
        </Link>
      </div>
    </div>
  );
};

export default FoodMenuDetail;
