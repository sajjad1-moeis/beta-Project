import React from "react";
import FormInput from "../../../components/element/formInput";

export default function UserInfoForm() {
   const Informations = [
      {title: "* نام مسافر اصلی"},
      {title: "* نام خانوادگی مسافر اصلی"},
      {title: "موبایل رزرو کننده"},
      {title: "* کد ملی (عدد لاتین وارد شود)"},
   ];
   return (
      <>
         {Informations.map((info) => (
            <FormInput placeholder={info.title} />
         ))}
      </>
   );
}
