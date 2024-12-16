
import Footer from "@/components/footer";
import Header from "@/components/Navbar";

import JessieBoudreauxPortfolioPage from "@/components/Portfolio-page/jessie-boudreaux";





export default function Home() {
  return (

    <main className="h-full w-full">
      <div className="flex flex-col gap-10">
        <Header />
        <JessieBoudreauxPortfolioPage />
        
        <Footer />
   
      
      </div>
    </main>


  
  );
}
