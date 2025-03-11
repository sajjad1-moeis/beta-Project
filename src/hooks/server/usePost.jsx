import axios from "axios";
import React, {useState} from "react";

export default function usePost() {
   const [data, setData] = useState([]);
   const [loding, setLoding] = useState(false);
   const [error, setError] = useState("");

   const postData = async (url, data) => {
      setLoding(true);

      try {
         // Post Data
         const response = await axios.post(`${url}`, data, {
            headers: {"Content-Type": "application/json"},
         });

         // Check Status Res

         if (response.status > 199 && response.status < 300) {
            setData(response.data);
         }
      } catch (error) {
         // Set Error State

         setError(error || "Unknown error");
         console.error(error);
      } finally {
         setLoding(false);
      }
   };

   return {data, error, loding, postData};
}
