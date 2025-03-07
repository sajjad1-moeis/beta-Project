import React, {Suspense, useEffect} from "react";
import routes from "./routes/routes";
import {useRoutes} from "react-router-dom";

export default function App() {
   let router = useRoutes(routes);

   return (
      <Suspense fallback={<div className='flex min-h-screen items-center justify-center text-3xl'>loading ...</div>}>
         {router}
      </Suspense>
   );
}
