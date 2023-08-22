import { useEffect, useState } from "react";

const useFood = () => {
  const [foods, setfoods] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/foodMenu")
      .then((res) => res.json())
      .then((data) => setfoods(data));
  }, []);
  return [foods, setfoods];
};

export default useFood;
