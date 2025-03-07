import {DocumentText, TickSquare} from "iconsax-react";
import React from "react";
import UserInfoForm from "./userInfoForm";
import FormInput from "../../../components/element/formInput";

export default function PassengersRoom() {
   // داده‌های نمونه
   const passengers = [1, 2, 3]; // لیست مسافران
   const capacityRoom = 2; // ظرفیت هر اتاق

   // تابع برای گروه‌بندی مسافران به اتاق‌ها با ظرفیت مشخص

   const groupPassengers = (passengers, capacity) => {
      const grouped = [];
      for (let i = 0; i < passengers.length; i += capacity) {
         grouped.push(passengers.slice(i, i + capacity));
      }
      return grouped;
   };

   // گروه‌بندی مسافران به اتاق‌ها

   const groupedRooms = groupPassengers(passengers, capacityRoom);

   return (
      <>
         {/* نمایش اتاق‌ها و مسافران */}

         {groupedRooms.map((room, index) => {
            const twoPassenger = room.length > 1;

            return (
               <div key={index}>
                  {/* هدر اتاق */}

                  <div className='md:flex-center '>
                     <h2 className='flex items-center gap-4 text-xs md:text-lg font-bold'>
                        <div className='p-2.5 rounded-lg bg-[#343434]'>
                           <DocumentText className='siz-5 md:size-6 text-white' variant='Bulk' />
                        </div>
                        <p>
                           مسافران اتاق {index + 1}
                           {twoPassenger && <span> - تعداد {room.length} نفر</span>}
                        </p>
                     </h2>

                     {/* نمایش گزینه‌های مسافر ایرانی (فقط برای اتاق‌های بیش از یک نفر) */}

                     {twoPassenger && (
                        <div className='flex gap-6 md:gap-9 max-md:text-xs max-md:mt-5'>
                           <div className='flex-center gap-4'>
                              <div className='size-7.5 bg-gray-50 rounded-md'></div>
                              مسافر ایرانی
                           </div>
                           <div className='flex-center gap-4'>
                              <div className='size-7.5 bg-primary/10 rounded-md flex-center justify-center'>
                                 <TickSquare className='text-primary' variant='Bulk' />
                              </div>
                              مسافر خارجی
                           </div>
                        </div>
                     )}
                  </div>

                  {/* نمایش فرم‌های اطلاعات مسافران */}

                  <div className='mt-6 grid md:grid-cols-2 xl:grid-cols-4 gap-3 md:gap-8'>
                     {room.map((_, passengerIndex) => (
                        <>
                           {twoPassenger && (
                              <p className='text-veri-xs md:hidden mt-3'>اطلاعات نفر {passengerIndex + 1}</p>
                           )}

                           <UserInfoForm key={passengerIndex} index={passengerIndex} />
                        </>
                     ))}
                  </div>
               </div>
            );
         })}

         {/* بخش نظر اضافه مسافر */}

         <div>
            <div className='flex-center'>
               <h2 className='flex items-center gap-4 text-xs md:text-lg text-danger font-bold'>
                  <div className='p-2.5 rounded-lg bg-danger '>
                     <svg
                        className='fill-white'
                        width='25'
                        height='25'
                        viewBox='0 0 25 25'
                        xmlns='http://www.w3.org/2000/svg'
                     >
                        <path d='M12.2396 15.045H10.4792V13.2314C10.4792 12.8065 10.125 12.4541 9.69792 12.4541C9.27083 12.4541 8.91667 12.8065 8.91667 13.2314V15.045H7.03125C6.60417 15.045 6.25 15.3974 6.25 15.8223C6.25 16.2472 6.60417 16.5996 7.03125 16.5996H8.91667V18.4133C8.91667 18.8382 9.27083 19.1906 9.69792 19.1906C10.125 19.1906 10.4792 18.8382 10.4792 18.4133V16.5996H12.2396C12.6667 16.5996 13.0208 16.2472 13.0208 15.8223C13.0208 15.3974 12.6667 15.045 12.2396 15.045Z' />
                        <path
                           opacity='0.4'
                           d='M21.3545 10.6143H18.3441C15.8753 10.6143 13.8649 8.60384 13.8649 6.13509V3.12467C13.8649 2.55176 13.3962 2.08301 12.8232 2.08301H8.40658C5.19824 2.08301 2.60449 4.16634 2.60449 7.88509V17.1143C2.60449 20.833 5.19824 22.9163 8.40658 22.9163H16.5941C19.8024 22.9163 22.3962 20.833 22.3962 17.1143V11.6559C22.3962 11.083 21.9274 10.6143 21.3545 10.6143Z'
                        />
                        <path d='M16.4587 2.30161C16.0316 1.87452 15.292 2.16619 15.292 2.75994V6.39536C15.292 7.91619 16.5837 9.17661 18.1566 9.17661C19.1462 9.18702 20.5212 9.18702 21.6982 9.18702C22.292 9.18702 22.6045 8.48911 22.1878 8.07244C20.6878 6.56202 18.0003 3.84327 16.4587 2.30161Z' />
                     </svg>
                  </div>
                  نظر اضافه مسافر
               </h2>
            </div>

            {/* فرم‌های اضافه کردن مسافر */}
            <div className='mt-6 grid lg:grid-cols-2 gap-3 md:gap-8'>
               <div className='grid lg:grid-cols-2 gap-3 md:gap-8 w-full'>
                  <FormInput placeholder='* نام نفر اضافه' />
                  <FormInput placeholder='* نام خانوادگی نفر اضافه' />
               </div>
               <FormInput placeholder='کد ملی (عدد لاتین وارد شود)' />
            </div>
         </div>
      </>
   );
}
