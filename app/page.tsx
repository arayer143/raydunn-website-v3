
import ContactSection from "./contact-section";
import WhyChooseUsSection from "@/components/Home-page-sections/why-choose-us";
import OurServicesSection from "@/components/Home-page-sections/our-services"
import TechnologiesSection from "@/components/Home-page-sections/technologies-section";
import CTASection from "@/components/Call-to-action/cta-section";
import PortfolioPage from "@/components/Portfolio-page/portfolio-page";
import FAQSection from "@/components/Home-page-sections/faq";
import Hero from "@/components/Home-page-sections/hero";
import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";

import PricingSection from "@/components/Home-page-sections/pricing-section";
import { CookieConsentPopup } from "@/components/cookie-consent-popup";


export default function Home() {
  return (

    <div className="flex flex-col min-h-screen">

<Navbar />

    
  <main className="flex-grow">

        <section className="w-full bg-gray-100 dark:bg-gray-800">
        <Hero />
        <OurServicesSection />
        <WhyChooseUsSection />
        <TechnologiesSection />
        <PricingSection/>
        
        <PortfolioPage />
        <CTASection />
        <FAQSection />
      
      
        <ContactSection />
      <Footer />
        </section>


     
<CookieConsentPopup />








    </main>


  </div>
)
}