import React, {useEffect, useReducer, useState} from "react";

const formHandeler = (states, action) => {
   let valid = false;

   const {max, min, id, value, phone} = action;

   if (value.length > 0) valid = true;

   if (min) valid = value.length > min;

   if (max) valid = valid && value.length < max;

   if (phone) {
      const regex = /^09[0-9]{9}$/;
      valid = regex.test(value);
   }

   return {...states, [id]: {value, isValid: valid, error: states[id].error}};
};

export default function useForm(objs) {
   let [inputs, dispach] = useReducer(formHandeler, objs);

   // is Valid All Inputs

   const [allValid, setAllValid] = useState(false);

   // Change Current Valid all Inputs

   useEffect(() => {
      for (let input in inputs) {
         if (!inputs[input].isValid) {
            setAllValid(false);
            return;
         }
      }

      setAllValid(true);
   }, [inputs]);

   //    Input Handeler

   const inputHandeler = (e, config) => {
      let {id, value} = e.target;

      dispach({id, value, ...config});
   };

   return [allValid, inputs, inputHandeler];
}
