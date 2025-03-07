import React, {Suspense, useEffect} from "react";
import routes from "./routes/routes";
import {useRoutes} from "react-router-dom";
import {Toaster} from "react-hot-toast";

export default function App() {
   let router = useRoutes(routes);

   return (
      <Suspense fallback={<div className='flex min-h-screen items-center justify-center text-3xl'>loading ...</div>}>
         {router}
         <Toaster position='top-left' reverseOrder={false} />
      </Suspense>
   );
}
