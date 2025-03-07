import {AddSquare, MinusSquare, TickSquare} from "iconsax-react";
import React, {useState} from "react";

export default function TotalPricePassengers() {
   const [countUser, setCountUser] = useState(1);

   return (
      <div className='md:mt-10'>
         <div className='bg-body  md:px-5 p-4 rounded-xl flex-center'>
            <p className='md:text-lg max-md:text-xs my-1 md:my-3 font-bold md:flex gap-1'>
               <p className='max-md:text-veri-xs max-md:mb-1'>مبلغ نفر اضافه :</p> (2,000,000 تومان)
            </p>
            <div className='flex-center gap-3 md:gap-5'>
               <div className='bg-primary/20 p-2 md:p-2.5 rounded-2lg'>
                  <AddSquare className='size-4 md:size-6 text-primary' variant='Bulk' />
               </div>
               <p className='max-md:text-xs'>0{countUser} نفر</p>
               <div className='bg-primary/20 p-2 md:p-2.5 rounded-2lg'>
                  <MinusSquare className='size-4 md:size-6 text-primary' variant='Bulk' />
               </div>
            </div>
         </div>

         <div className='grid xl:grid-cols-2 xl:gap-9'>
            <button className='p-4 md:p-5 mt-6 bg-body rounded-xl text-veri-xs md:text-lg w-full flex-center'>
               <div className='flex-center gap-4 font-bold'>
                  <div className='p-1.5 bg-primary/10 rounded-lg'>
                     <TickSquare size='25' className='text-primary' variant='Bulk' />
                  </div>
                  نیم شارژ ورود هتل :
               </div>
               <p>2,750,000 تومان</p>
            </button>
            <button className='p-4 md:p-5  mt-3 md:mt-6 bg-body rounded-xl text-veri-xs md:text-lg w-full flex-center'>
               <div className='flex-center gap-4 font-bold'>
                  <div className='p-1.5 bg-[#eaeaea] rounded-lg size-9' />
                  نیم شارژ خروج هتل :
               </div>
               <p>2,750,000 تومان</p>
            </button>
         </div>
      </div>
   );
}
