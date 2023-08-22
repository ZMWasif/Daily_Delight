import React from "react";
import Appointment from "./Appointment";

const Booking = () => {
  return (
    <div>
      <div className="text-center text-4xl pt-5">
        Here You can book your Table
      </div>
      <div>
        <Appointment></Appointment>
      </div>
    </div>
  );
};

export default Booking;
