
import ServicesPage from "@/components/Services-Page/services-page";
import Header from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/footer";




export default function Home() {
  return (

    <main className="h-full w-full">
      <div className="flex flex-col gap-10">
        <Header />
        <ServicesPage />
        <Footer />
        
  
   
      
      </div>
    </main>


  
  );
}