
import Header from "@/components/Header/header";
import ContactSection from "./contact-section";
import IntroSection from "@/components/Intro-Section/intro-section"
import WhyChooseUsSection from "@/components/Services-sections/why-choose-us";
import TechnologiesSection from "@/components/Home-page-sections/technologies-section";
import CTASection from "@/components/Call-to-action/cta-section";
import PortfolioPage from "@/components/Portfolio-page/portfolio-page";
import FAQSection from "@/components/Home-page-sections/faq";
import Hero from "@/components/Hero/hero";
import Footer from "@/components/Footer/footer";


export default function Home() {
  return (

    <div className="flex flex-col min-h-screen">

<Header />

    
  <main className="flex-3">

        <section className="w-full bg-gray-100 dark:bg-gray-800">
        <Hero />
        <IntroSection />
        <WhyChooseUsSection />
        <TechnologiesSection />
        <CTASection />
        <PortfolioPage />
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