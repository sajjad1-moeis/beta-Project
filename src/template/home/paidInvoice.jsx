import {TickSquare} from "iconsax-react";
import React from "react";

export default function PaidInvoice() {
   const InvoiceItems = [
      {title: "قیمت کل 3 شب", price: 15000000},
      {title: "مبلغ کسر شده کد تخفیف", price: 2000000},
      {title: "مالیات و حق سرویس", price: 500000},
   ];

   return (
      <>
         <div className='p-5 mt-6 bg-white rounded-xl text-lg h-max'>
            <h3 className='text-sm xl:text-xl font-bold lg:mt-2.5'>صورتحساب پرداختی</h3>
            <div className='border-b-2 border-gray-300 border-dashed  mt-7 mb-9 relative'>
               <div className='size-7.5 absolute bg-body z-50 -top-1/2 -translate-y-1/2 rounded-full -left-9' />
               <div className='size-7.5 absolute bg-body z-50 -top-1/2 -translate-y-1/2 rounded-full -right-9' />
            </div>

            <div className='space-y-10 text-xs md:text-sm xl:text-lg'>
               {InvoiceItems.map(({price, title}) => (
                  <div className='flex-center'>
                     <p className='text-gray-700'>{title}</p>
                     <p>{price?.toLocaleString()} تومان</p>
                  </div>
               ))}
            </div>
            <button className='mt-14 bg-success p-3 xl:p-5 rounded-2lg text-white max-xl:text-sm text-base flex-center w-full'>
               <p>مجموع مبلغ پرداختی</p>
               <p>18,500,000 تومان</p>
            </button>
         </div>
         <button className='p-5 mt-6 bg-white rounded-xl text-veri-xs md:text-sm xl:text-base w-full flex-center'>
            <div className='flex-center  gap-2 2xl:gap-4 font-bold'>
               <div className='p-1.5 bg-gray-50 rounded-lg'>
                  <TickSquare size='25' className='text-primary' variant='Bulk' />
               </div>
               پرداخت از کیف پول
            </div>
            <button className='text-veri-xs lg:text-sm text-primary py-2 px-5 rounded-md bg-primary/15'>
               انتخاب شد
            </button>
         </button>

         <button className='p-5 mt-6 bg-white rounded-xl text-right text-veri-xs md:text-sm xl:text-base w-full flex-center'>
            <div className='flex-center gap-2 2xl:gap-4 font-bold'>
               <div className='p-1.5 bg-gray-50 rounded-lg size-8 flex-none' />
               پرداخت از درگاه پرداخت امن (زرین پال)
            </div>
            <button className='text-veri-xs lg:text-sm py-2 px-5 rounded-md bg-[#E9E9E9] text-gray-700'>
               قفل میباشد
            </button>
         </button>
         <button className='bg-primary w-full text-white mt-6 py-5 text-xs lg:text-lg rounded-2lg'>تایید نهایی</button>
      </>
   );
}
