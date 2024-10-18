
import Footer from "@/components/Footer/footer";
import Header from "@/components/Header/header";
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
