import React from "react";

export default function FormInput({className, placeholder}) {
   return (
      <input
         className={`${className} placeholder:text-xs md:placeholder:text-sm p-4 bg-body rounded-lg placeholder:text-[#a4a4a4]`}
         placeholder={placeholder}
      />
   );
}
