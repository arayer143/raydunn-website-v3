
import Footer from "@/components/footer";
import Header from "@/components/Navbar";
import PristineCleanShowcasePage from "@/components/Portfolio-page/pristine-clean";





export default function Home() {
  return (

    <main className="h-full w-full">
      <div className="flex flex-col gap-10">
        <Header />
        <PristineCleanShowcasePage />
        
        <Footer />
   
      
      </div>
    </main>


  
  );
}
