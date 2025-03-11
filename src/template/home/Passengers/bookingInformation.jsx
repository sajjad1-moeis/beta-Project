import {Crown} from "iconsax-react";
import React from "react";
import FormInput from "../../../components/element/formInput";

export default function BookingInformation() {
   const Informations = [
      {title: "* نام رزرو کننده"},
      {title: "* نام خانوادگی رزرو کننده"},
      {title: "* موبایل رزرو کننده"},
      {title: "کد ملی (اختیاری)"},
   ];

   return (
      <div>
         <h2 className='flex items-center gap-4 text-xs md:text-lg text-primary font-bold'>
            <div className='p-2.5 rounded-lg bg-primary'>
               <Crown className='siz-5 md:size-6 text-white' variant='Bulk' />
            </div>
            اطلاعات رزرو کننده
         </h2>

         <div className='mt-6 grid lg:grid-cols-4 gap-3 lg:gap-8'>
            {Informations.map((info) => (
               <FormInput placeholder={info.title} />
            ))}
         </div>
      </div>
   );
}
