import React from "react";
import {itemsPathFooter} from "../../../data/data";
import {ArrowSquareLeft, CallCalling, Location, Sms} from "iconsax-react";

export default function LinksItem() {
   return (
      <div className='grid xl:grid-cols-5 mt-12 2xl:gap-20 max-lg:bg-white'>
         <div className='max-md:hidden md:col-span-2 flex gap-8 min-[1700px]:gap-20 w-full max-md:p-6 p-7.5'>
            {itemsPathFooter.map((path) => (
               <div className='w-full'>
                  <p className='text-sm md:text-lg 2xl:text-xl font-bold mb-5 pr-2.5 relative'>
                     {path.title}
                     <div className='absolute w-[5px] top-1/2 -translate-y-1/2 right-0 rounded-full h-2/3 bg-primary' />
                  </p>
                  <div className='space-y-3'>
                     {path.paths.map((link) => (
                        <li className='text-[#ABABAB] max-2xl:text-sm transition-all hover:text-black cursor-pointer'>
                           {link.title}
                        </li>
                     ))}
                  </div>
               </div>
            ))}
         </div>
         <div className='flex flex-col gap-3 md:hidden max-md:p-6 p-7.5'>
            {itemsPathFooter.map((item) => (
               <div className='bg-gray-50 p-4 rounded-2lg flex-center '>
                  <p className='text-sm font-bold relative pr-2.5'>
                     {item.title}
                     <div className='absolute w-[5px] top-1/2 -translate-y-1/2 right-0 rounded-full h-2/3 bg-black'></div>
                  </p>
                  <ArrowSquareLeft className='text-primary max-md:size-5 size-5' variant='Bulk' />
               </div>
            ))}
         </div>
         <div className='md:col-span-3 grid md:grid-cols-2 gap-10 2xl:gap-20 max-md:p-6 p-7.5 bg-white'>
            <div>
               <p className='text-sm md:text-lg 2xl:text-xl font-bold mb-5 pr-2.5 relative'>
                  ارتباط با ما
                  <div className='absolute w-[5px] top-1/2 -translate-y-1/2 right-0 rounded-full h-2/3 bg-primary' />
               </p>
               <div className='max-md:text-sm flex flex-col gap-3'>
                  <div className=' p-2.5 bg-gray-50 rounded-[14px] flex items-center gap-4'>
                     <div className='p-2.5 md:p-4 bg-white rounded-lg size-max'>
                        <CallCalling className='text-primary max-md:size-5' variant='Bulk' />
                     </div>
                     021 - 88844243
                  </div>
                  <div className='p-2.5 bg-gray-50 rounded-[14px] flex items-center gap-4'>
                     <div className='p-2.5 md:p-4 bg-white rounded-lg size-max'>
                        <Sms className='text-primary max-md:size-5' variant='Bulk' />
                     </div>
                     info@hajija.com
                  </div>
                  <div className='p-2.5 bg-gray-50 rounded-[14px] flex items-center gap-4'>
                     <div className='p-2.5 md:p-4 bg-white rounded-lg size-max'>
                        <Location className='text-primary max-md:size-5' variant='Bulk' />
                     </div>
                     تهران، جردن خیابان مطهری، رو به رو بانک پارسیان
                  </div>
               </div>
            </div>
            <div className='max-md:mt-9 '>
               <p className='text-sm md:text-lg 2xl:text-xl font-bold mb-5 pr-2.5 relative'>
                  شمارتو ثبت کن از تخفیف ها خبر دار شو
                  <div className='absolute w-[5px] top-1/2 -translate-y-1/2 right-0 rounded-full h-2/3 bg-primary' />
               </p>
               <div className='flex flex-col gap-3'>
                  <div className='p-2.5 bg-gray-50 rounded-[14px] flex-center gap-4'>
                     <p className='mr-2.5 text-sm md:text-lg 2xl:text-xl font-bold'>09912366290</p>
                     <button className='bg-primary py-4 px-7 rounded-lg text-white text-sm'>ثبت شماره</button>
                  </div>
                  <div className='grid grid-cols-3 gap-4'>
                     <div className='bg-gray-50 p-6 rounded-[14px] h-max'>
                        <img src='/image/enamdImg.png' alt='' className='h-20 md:h-24 w-full' />
                     </div>
                     <div className='bg-gray-50 p-6 rounded-[14px] h-max'>
                        <img src='/image/meliNeshan.png' alt='' className='h-20 md:h-24 w-full' />
                     </div>
                     <div className='bg-gray-50 p-6 rounded-[14px] h-max'>
                        <img src='/image/enamdImg.png' alt='' className='h-20 md:h-24 w-full' />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
