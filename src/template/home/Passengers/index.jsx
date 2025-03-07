import React from "react";
import BookingInformation from "./bookingInformation";
import PassengersRoom from "./PassengersRoom";
import TotalPricePassengers from "./totalPricePassengers";

export default function Passengers() {
   return (
      <div className='p-4 md:p-7.5 bg-white rounded-2xl space-y-5 md:space-y-10'>
         <BookingInformation />
         <PassengersRoom />
         <TotalPricePassengers />
      </div>
   );
}
