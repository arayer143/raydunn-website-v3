import Footer from "@/components/Footer/footer";
import Header from "@/components/Header/header";

import SEOOptimizationPage from "@/components/Services-Page/seo-optimization";





export default function Home() {
  return (

    <main className="h-full w-full">
      <div className="flex flex-col gap-10">
        <Header />
        <SEOOptimizationPage />
        <Footer />
  
   
      
      </div>
    </main>


  
  );
}