import Footer from "@/components/Footer/footer";
import Navbar from "@/components/Navbar/Navbar";
import BasicEcommerce from "@/components/Pricing-Page/basic-ecommerce";





export default function BasicWebsite() {
    return (
  
      <main className="h-full w-full">
  <Navbar />
        <div className="flex flex-col gap-10">

         
<BasicEcommerce />
        
        </div>

        <Footer />
      </main>
  
  
    
    );
  }