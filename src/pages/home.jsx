import React from "react";
import LayoutRoot from "../routes/layoutRoot";
import Stepper from "../template/home/stepper";
import TourInfos from "../template/home/tourInfos";
import DiscountCode from "../template/home/discountCode";
import ApplyDiscountCode from "../template/home/applyDiscountCode";
import PaidInvoice from "../template/home/paidInvoice";
import Passengers from "../template/home/Passengers";

export default function Home() {
   return (
      <LayoutRoot>
         <Stepper />

         <div className='max-md:pt-0 p-responsive'>
            <div className='lg:grid  lg:grid-cols-3 gap-6'>
               <div className='p-2.5 md:p-4 bg-white rounded-2.5xl size-full lg:-mb-5'>
                  <img src='/image/tour.png' className='w-full xl:h-full' alt='عکس هتل' loading='lazy' />
               </div>

               <div className='md:col-span-2 h-max'>
                  <TourInfos />
                  <DiscountCode />
               </div>
            </div>

            <div className='grid lg:grid-cols-3 gap-6 mt-6'>
               <div className='max-lg:hidden'>
                  <ApplyDiscountCode />
                  <PaidInvoice />
               </div>

               <div className='md:col-span-2'>
                  <Passengers />
                  <div className='lg:hidden'>
                     <ApplyDiscountCode />
                     <PaidInvoice />
                  </div>
               </div>
            </div>
         </div>
      </LayoutRoot>
   );
}
