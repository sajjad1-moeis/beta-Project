import {Information, Verify} from "iconsax-react";
import React from "react";
export default function Stepper() {
   const activeStep = 1;
   const Steppers = ["گام اول : مشخصات فرد", "گام دوم : بررسی ظرفیت", "گام سوم : پرداخت وجه", "گام چهارم : صدور واچر"];
   return (
      <div className='p-responsive'>
         <div className=' max-md:hidden grid grid-cols-2 2xl:grid-cols-4 gap-5  2xl:gap-24'>
            {Steppers.map((step, index) => {
               const isActive = index < activeStep;

               return (
                  <div className='flex-center gap-1.5 2xl:gap-2.5 w-full'>
                     <div className={`rounded-2lg   ${isActive ? "bg-success" : "bg-gray-300"}  p-3.5`}>
                        {isActive ? (
                           <Verify size='32' color='#ffffff' variant='Bulk' />
                        ) : (
                           <Information size='32' color='#494949' variant='Bulk' />
                        )}
                     </div>
                     <div
                        className={`rounded-2lg size-full justify-center flex-center ${
                           isActive ? "bg-success text-white" : "bg-gray-300"
                        } `}
                     >
                        {step}
                     </div>
                  </div>
               );
            })}
         </div>

         <div className='md:hidden'>
            <div className='p-2.5 bg-white rounded-lg flex-center text-veri-xs'>
               <p className='my-2.5 mr-1 font-bold'>{Steppers[activeStep - 1]}</p>
               <button className='bg-primary/10 text-primary py-2 px-4 rounded-md '>درحال تکمیل</button>
            </div>
            <div className='mt-5 flex justify-center items-start gap-1'>
               {Steppers.map((_, index) => {
                  const isActive = index < activeStep;

                  return <div className={`w-5 h-0.5 ${isActive ? "bg-primary" : "bg-[#E3E3E3]"} rounded-md`}></div>;
               })}
            </div>
         </div>
      </div>
   );
}
