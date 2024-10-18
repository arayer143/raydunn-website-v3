
import Footer from "@/components/Footer/footer";
import Header from "@/components/Header/header";

import OutKastIndustrialShowcasePage from "@/components/Portfolio-page/outkast";





export default function Home() {
  return (

    <main className="h-full w-full">
      <div className="flex flex-col gap-10">
        <Header />
        <OutKastIndustrialShowcasePage />
        
        <Footer />
   
      
      </div>
    </main>


  
  );
}
