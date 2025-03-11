import React from "react";
import {infosReserveHotel} from "../../data/data";
const DescBox = ({icon, title, content}) => {
   return (
      <div className='flex items-center gap-4'>
         <div className='bg-primary/10 p-4  rounded-lg fill-primary'>{icon}</div>
         <div>
            <p className=' 2xl:text-lg'>{title}</p>
            <p className='text-gray-700 mt-2 max-md:text-xs 2xl:text-base'>{content}</p>
         </div>
      </div>
   );
};

export default function TourInfos() {
   return (
      <div className='p-4 md:p-6 max-lg:mt-7.5 bg-white rounded-2xl'>
         <h1 className='font-bold text-sm md:text-xl'>مشخصات رزرو هتل</h1>

         <div className='max-xl:flex-col gap-y-5 xl:gap-y-9 flex justify-between mt-5 md:mt-8'>
            <div className='grid grid-cols-1 gap-y-5 xl:gap-y-9'>
               {infosReserveHotel.slice(0, 2).map((desc) => (
                  <DescBox {...desc} />
               ))}
            </div>

            <div className='grid grid-cols-1 xl:grid-cols-2  gap-y-5 xl:gap-y-9  lg:gap-x-20'>
               {infosReserveHotel.slice(2).map((desc) => (
                  <DescBox {...desc} />
               ))}
            </div>
         </div>
      </div>
   );
}
