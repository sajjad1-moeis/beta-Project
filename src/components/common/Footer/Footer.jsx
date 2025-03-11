import {ArrowCircleUp} from "iconsax-react";
import React from "react";
import LinksItem from "./linksItem";

export default function Footer() {
   function scrollToTop() {
      window.scrollTo({
         top: 0,
         behavior: "smooth", // اسکرول نرم
      });
   }

   return (
      <div className='lg:p-responsive mt-14 lg:mt-44 relative'>
         <div
            style={{backgroundPosition: "top center"}}
            className='rounded-5xl overflow-hidden relative bg-[url(/image/footerBgSm.png)]  md:bg-[url(/image/footerBgLg.png)] bg-no-repeat bg-contain min-[550px]:bg-cover md:bg-contain min-[1310px]:bg-cover'
         >
            <a
               onClick={scrollToTop}
               className='absolute max-md:hidden top-0 left-1/2 -translate-x-1/2 w-[4%] h-[3%]  xl:h-[8%] cursor-pointer rounded-full'
            />

            <a
               onClick={scrollToTop}
               className='absolute top-0 left-[16%]  w-[8%] h-[3%] min-[540px]:h-[5%] z-[555] md:hidden cursor-pointer rounded-full'
            />

            <div className='relative z-50 max-sm:pt-7 max-md:pt-12'>
               <div className='flex-center gap-10 relative z-50 md:mt-14 max-md:p-6 p-7.5 '>
                  <div>
                     <p className='text-sm md:text-xl relative pr-2.5'>
                        <div className='absolute w-[5px] right-0 rounded-full h-full bg-primary' />
                        داستان حاجیجا چیست؟
                     </p>
                     <div className='text-xs md:text-lg mt-5 text-[#888]'>
                        <p className=' relative pr-2.5'>
                           <div className='absolute w-[5px] top-1 right-0 rounded-full h-full bg-primary' />
                           لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                           چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای{" "}
                        </p>
                        <p className=' relative pr-2.5'>
                           <div className='absolute w-[5px] right-0 -top-0 rounded-full h-full bg-primary/60' />
                           شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                           کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را{" "}
                        </p>
                        <p className=' relative pr-2.5'>
                           <div className='absolute w-[5px] right-0 rounded-full -top-1 h-full bg-primary/20' />
                           می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و
                           فرهنگ پیشرو در زبان فارسی ایجاد کرد.
                        </p>
                     </div>
                  </div>
                  <svg
                     width='184'
                     height='148'
                     viewBox='0 0 184 148'
                     className='fill-white max-lg:hidden'
                     xmlns='http://www.w3.org/2000/svg'
                  >
                     <rect width='184' height='148' rx='14' fill='#4156D9' />
                     <path d='M50.6305 69.96H49.3505V82.504H50.6305V85H44.3585V77.48H39.3345V85H33.0625V82.504H34.3105V69.96H33.0625V67.464H39.3345V74.984H44.3585V67.464H50.6305V69.96ZM53.125 67.464H69.413V85H64.421V77.48H59.397V85H54.373V69.96H53.125V67.464ZM64.421 74.984V69.96H59.397V74.984H64.421ZM80.7055 67.464H86.9775V85H71.9375V77.48H76.9615V82.504H81.9535V69.96H80.7055V67.464ZM99.516 69.96H97.02V82.504H99.516V85H89.5V82.504H91.996V69.96H89.5V67.464H99.516V69.96ZM112.047 69.96H109.551V82.504H112.047V85H102.031V82.504H104.527V69.96H102.031V67.464H112.047V69.96ZM123.331 67.464H129.603V85H114.562V77.48H119.587V82.504H124.579V69.96H123.331V67.464ZM132.125 67.464H148.413V85H143.421V77.48H138.397V85H133.373V69.96H132.125V67.464ZM143.421 74.984V69.96H138.397V74.984H143.421Z' />
                     <path d='M144.5 33L145.801 43.1989L156 44.5L145.801 45.8011L144.5 56L143.199 45.8011L133 44.5L143.199 43.1989L144.5 33Z' />
                     <path d='M154 54L154.792 60.208L161 61L154.792 61.792L154 68L153.208 61.792L147 61L153.208 60.208L154 54Z' />
                     <path d='M137.5 54L138.009 57.9909L142 58.5L138.009 59.0091L137.5 63L136.991 59.0091L133 58.5L136.991 57.9909L137.5 54Z' />
                  </svg>
               </div>
               <LinksItem />
               <div className='max-md:p-6 p-7.5 bg-white'>
                  <div className='bg-gray-50 p-3 md:p-6 rounded-2lg max-md:text-sm mt-9 md:mt-14'>
                     تمامی حقوق این وبسایت متعلق به شرکت حاجیجا میباشد.
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
