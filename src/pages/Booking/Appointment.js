import { format } from "date-fns";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import BookingModal from "./BookingModal";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Appointment = ({ setAppointment }) => {
  const [user, loading, error] = useAuthState(auth);

  const handleBooking = (event) => {
    event.preventDefault();

    const booking = {
      customer: user.email,
      customerName: user.displayName,
      phone: event.target.phone.value,
    };
  };
  const [date, setDate] = useState(new Date());
  return (
    <div className="hero min-h-screen">
      <div>
        <DayPicker mode="single" selected={date} onSelect={setDate}></DayPicker>
        <p className="font-bold">You have selected : {format(date, "PP")}</p>
        <div>
          {/* Open the modal using ID.showModal() method */}
          <Button className="btn" onClick={() => window.my_modal_5.showModal()}>
            Confirm Booking
          </Button>
          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <form method="dialog" className="modal-box">
              <input
                type="text"
                disabled
                value={format(date, "PP")}
                className="input input-bordered w-full max-w-xs"
              />

              <input
                type="text"
                name="name"
                disabled
                value={user?.displayName || ""}
                className="input input-bordered w-full max-w-xs"
                required
              />
              <input
                type="text"
                name="email"
                disabled
                value={user?.email || ""}
                className="input input-bordered w-full max-w-xs"
                required
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                className="input input-bordered w-full max-w-xs"
                required
              />
              <input
                type="submit"
                value="Submit"
                className="input input-bordered w-full max-w-xs btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary"
              />
              <div className="modal-action">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </div>
            </form>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
