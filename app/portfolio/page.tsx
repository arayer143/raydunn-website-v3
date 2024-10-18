
import Footer from "@/components/Footer/footer";
import Header from "@/components/Header/header";
import PortfolioPage from "@/components/Portfolio-page/portfolio-page";




export default function Home() {
  return (

    <main className="h-full w-full">
      <div className="flex flex-col gap-10">
        <Header />
        <PortfolioPage />
        
  <Footer />
   
      
      </div>
    </main>


  
  );
}
