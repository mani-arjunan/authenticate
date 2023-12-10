import React from "react";

type PassenderCardProps = {
  firstName: string;
  lastName: string;
  email: string;
  seatNumber: number;
  dateOfBooking: string;
};

export function PassengerCard(props: PassenderCardProps): React.ReactElement {
  return (
    <div id="card">
      <div id="name">
        <input value={props.firstName} placeholder="firstName" />
        <input value={props.lastName} placeholder="lastName" />
      </div>
      <div id="email">
        <input value={props.email} placeholder="email" />
      </div>
      <div id="seat">
        <span>{props.seatNumber}</span>
      </div>
      <div id="dob">
        <input type="date" value={props.dateOfBooking} />
      </div>
    </div>
  );
}
