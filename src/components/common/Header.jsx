import {ArrowSquareLeft, Category} from "iconsax-react";
import React from "react";

export default function Header() {
   const ItemsHeader = [
      {title: "صفحه اصلی", path: "/"},
      {title: "اقامتگاه", path: "/"},
      {title: "مقالات", path: "/"},
      {title: "راه های ارتباطی", path: "/"},
   ];

   return (
      <div className='p-responsive flex-center max-md:justify-center bg-white shadow-lg'>
         <svg width='203' height='35' viewBox='0 0 203 35' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
               d='M34.587 5.39H32.067V30.086H34.587V35H22.239V20.195H12.348V35H0V30.086H2.457V5.39H0V0.475998H12.348V15.281H22.239V0.475998H34.587V5.39ZM39.498 0.475998H71.565V35H61.737V20.195H51.846V35H41.955V5.39H39.498V0.475998ZM61.737 15.281V5.39H51.846V15.281H61.737ZM93.7972 0.475998H106.145V35H76.5352V20.195H86.4262V30.086H96.2542V5.39H93.7972V0.475998ZM130.83 5.39H125.916V30.086H130.83V35H111.111V30.086H116.025V5.39H111.111V0.475998H130.83V5.39ZM153.044 0.475998H165.392V35H135.782V20.195H145.673V30.086H155.501V5.39H153.044V0.475998ZM170.358 0.475998H202.425V35H192.597V20.195H182.706V35H172.815V5.39H170.358V0.475998ZM192.597 15.281V5.39H182.706V15.281H192.597Z'
               fill='#111111'
            />
         </svg>
         <div className='bg-gray-200/30 p-2.5 max-xl:hidden max-2xl:py-5  rounded-[14px]'>
            <ul className='flex-center gap-1'>
               {ItemsHeader.map((item, index) => (
                  <li className={`${index + 1 === ItemsHeader.length || "border-l border-[#7A7A7A]"} px-11`}>
                     {item.title}
                  </li>
               ))}
               <div className='bg-white max-2xl:hidden rounded-2lg p-3.5 border-2 border-gray-300'>
                  <Category size='35' color='#262626' variant='Bulk' />
               </div>
            </ul>
         </div>
         <button className='bg-primary max-md:hidden  text-white rounded-xl p-5 flex-center gap-4'>
            ساشا آذرخش آلوچه
            <ArrowSquareLeft className='text-white -rotate-90' variant='Bulk' />
         </button>
      </div>
   );
}
