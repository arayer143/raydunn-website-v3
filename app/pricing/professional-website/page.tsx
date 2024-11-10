import Footer from "@/components/Footer/footer";
import Navbar from "@/components/Navbar/Navbar";
import ProfessionalWebsite from "@/components/Pricing-Page/professional-website";





export default function professionalWebsitePage() {
    return (
  
      <main className="h-full w-full">
  <Navbar />
        <div className="flex flex-col gap-10">

         <ProfessionalWebsite />

        
        </div>

        <Footer />
      </main>
  
  
    
    );
  }