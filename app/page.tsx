
import ContactSection from "./contact-section";
import WhyChooseUsSection from "@/components/Home-page-sections/why-choose-us";
import OurServicesSection from "@/components/Home-page-sections/our-services"
import TechnologiesSection from "@/components/Home-page-sections/technologies-section";
import CTASection from "@/components/Call-to-action/cta-section";
import PortfolioPage from "@/components/Portfolio-page/portfolio-page";
import FAQSection from "@/components/Home-page-sections/faq";
import Hero from "@/components/Hero/hero";
import Footer from "@/components/Footer/footer";
import Navbar from "@/components/Navbar/Navbar";


export default function Home() {
  return (

    <div className="flex flex-col min-h-screen">

<Navbar />

    
  <main className="flex-3">

        <section className="w-full bg-gray-100 dark:bg-gray-800">
        <Hero />
        <OurServicesSection />
        <WhyChooseUsSection />
        <TechnologiesSection />
        
        <PortfolioPage />
        <CTASection />
        <FAQSection />
      
  
        </section>


     
      <section className="w-full">
      <ContactSection />
      <Footer />

      </section>







    </main>


  </div>
)
}