import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer/Footer";

export default function LayoutRoot({children}) {
   return (
      <>
         {/* Header Compoenent  */}

         <Header />

         {children}

         {/* Footer Compoenent  */}

         <Footer />
      </>
   );
}
