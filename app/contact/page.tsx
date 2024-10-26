
import Footer from "@/components/Footer/footer";
import ContactSection from "../contact-section";
import Header from "@/components/Navbar/Navbar";




export default function Home() {
  return (

    <main className="h-full w-full">
      <div className="flex flex-col gap-10">
        <Header />
        <ContactSection />
        <Footer />
  
   
      
      </div>
    </main>


  
  );
}