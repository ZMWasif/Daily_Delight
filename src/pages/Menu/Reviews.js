import React from "react";

const Reviews = ({ review }) => {
  return (
    <div className="card lg:max-w-lg bg-slate-900 shadow-xl text-white">
      <div className="card-body">
        <p>
          An exceptional dining experience! From the moment we stepped in, the
          ambiance was inviting. The menu offered a tantalizing array of dishes,
          each a masterpiece of flavor and presentation. The staff was
          attentive, enhancing our evening. A must-visit for anyone seeking
          culinary delight and a memorable evening.
        </p>
        <div className="flex items-center">
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 mr-5">
              <img src={review.img} alt="" />
            </div>
          </div>
          <div>
            <h4 className="text-xl">{review.name}</h4>
            <p>{review.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
