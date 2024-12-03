import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";
import ProfessionalEcommerce from "@/components/Pricing-Page/professional-ecommerce";





export default function professionalEcommercePage() {
    return (
  
      <main className="h-full w-full">
  <Navbar />
        <div className="flex flex-col gap-10">

         
<ProfessionalEcommerce />
        
        </div>

        <Footer />
      </main>
  
  
    
    );
  }