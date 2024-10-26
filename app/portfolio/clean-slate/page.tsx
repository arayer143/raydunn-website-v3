
import Footer from "@/components/Footer/footer";
import Header from "@/components/Navbar/Navbar";
import CleanSlateShowcasePage from "@/components/Portfolio-page/clean-slate";





export default function Home() {
  return (

    <main className="h-full w-full">
      <div className="flex flex-col gap-10">
        <Header />
        <CleanSlateShowcasePage />
        
        <Footer />
   
      
      </div>
    </main>


  
  );
}
