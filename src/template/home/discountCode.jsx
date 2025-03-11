import React from "react";

export default function DiscountCode() {
   return (
      <div className='mt-6 p-4 bg-white rounded-2xl'>
         <div className='lg:flex-center'>
            <div className='md:p-2.5 '>
               <p className='text-sm md:text-xl'>کد تخفیف هتل</p>
               <p className='my-4 text-primary text-xs md:text-lg'>ساشا آذرخش آلوچه عزیز!</p>
               <p className='text-veri-xs md:text-lg'>
                  * کد تخفیف معادل (30%) برای اتاق دوبلکس رویال - هتل اسپیناس پالاس قابل استفاده میباشد.
               </p>
            </div>
            <div className='flex flex-col max-md:flex-row-reverse gap-3 max-lg:mt-5'>
               <button className='text-danger border-2 bg-danger/10 border-dashed text-xs md:text-1.5xl rounded-lg p-4 px-12 border-danger'>
                  NMJ2516NJH
               </button>
               <button className='bg-gray-100 text-xs md:text-1.5xl rounded-lg p-4 px-5 md:px-12 border-danger w-full'>
                  کپی کد تخفیف
               </button>
            </div>
         </div>
      </div>
   );
}
