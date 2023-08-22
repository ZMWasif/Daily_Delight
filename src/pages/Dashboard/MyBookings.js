import React from "react";

const MyBookings = () => {
  return (
    <div>
      <h2 className="mt-3 mb-3">My Bookings: {/* {appointments.length} */}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Table No</th>
            </tr>
          </thead>
          <tbody>
            {/* {appointments.map((a, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{a.patientName}</td>
                <td>{a.date}</td>
                <td>{a.slot}</td>
                <td>{a.treatment}</td>
              </tr>
            ))} */}
            {/* row 1 */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBookings;
