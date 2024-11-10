import Footer from "@/components/Footer/footer";
import Navbar from "@/components/Navbar/Navbar";
import PricingPage from "@/components/Pricing-Page/pricing-page";






export default function Home() {
    return (
  
      <main className="h-full w-full">
  <Navbar />
        <div className="flex flex-col gap-10">

         
<PricingPage />
        
        </div>

        <Footer />
      </main>
  
  
    
    );
  }