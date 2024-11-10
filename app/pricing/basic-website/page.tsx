import Footer from "@/components/Footer/footer";
import Navbar from "@/components/Navbar/Navbar";
import BasicWebsite from "@/components/Pricing-Page/basic-website";





export default function Home() {
    return (
  
      <main className="h-full w-full">
  <Navbar />
        <div className="flex flex-col gap-10">

         <BasicWebsite />

        
        </div>

        <Footer />
      </main>
  
  
    
    );
  }