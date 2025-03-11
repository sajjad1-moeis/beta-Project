import React from "react";

export default function ApplyDiscountCode() {
   return (
      <div className='p-5  bg-white rounded-xl text-lg h-max max-lg:mt-5'>
         <h2 className='text-sm md:text-lg xl:text-xl mt-2.5'>اعمال کد تخفیف</h2>
         <div className='border-b-2 border-gray-300 border-dashed mt-7 mb-5 xl:mb-9' />
         <p className='text-gray-700 text-veri-xs lg:text-sm'>مشترک گرامی کد تخفیف خود را وارد نمایید.</p>
         <div className='flex gap-4 xl:gap-5 mt-9 max-xl:text-xs text-base'>
            <button className='bg-[#343434] rounded-2lg w-full py-3.5 text-white '>اعمال کد تخفیف</button>
            <button className='bg-success/15 text-success rounded-2lg w-full'>NMJ2516NJH</button>
         </div>
         <div className='mt-5'>
            <button className='flex-center p-5 bg-gray-100 text-xs lg:text-sm xl:text-lg w-full rounded-2lg '>
               <p>مبلغ تخفیف :</p>
               <p>2,000,000 تومان</p>
            </button>
         </div>
      </div>
   );
}
