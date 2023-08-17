import React from "react";
import quote from "../../assets/quote.svg";
import people1 from "../../assets/people1.png";
import people2 from "../../assets/people2.png";
import people3 from "../../assets/people3.png";
import Reviews from "./Reviews";

const Testimonial = () => {
  const reviews = [
    {
      _id: 1,
      name: "Lubaba Alam",
      review: "",
      location: "Chittagong",
      img: people1,
    },
    {
      _id: 2,
      name: "Novera Alam",
      review: "",
      location: "Germany",
      img: people2,
    },
    {
      _id: 3,
      name: "Kashfi Alam",
      review: "",
      location: "Bangladesh",
      img: people3,
    },
  ];
  return (
    <section className="my-28">
      <div className="flex justify-between flex__center">
        <div className="text-center">
          <h4 className="text-xl headtext__cormorant text-center font-bold">
            Reviews
          </h4>
          <h2 className="text-3xl text-white">What our Customers say</h2>
        </div>
        <div>
          <img className="w-24 lg:w-48" src={quote} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {reviews.map((review) => (
          <Reviews key={review._id} review={review}></Reviews>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
