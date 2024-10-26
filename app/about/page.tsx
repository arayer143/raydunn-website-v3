
import AboutPage from "@/components/About-Page/about-page";
import Footer from "@/components/Footer/footer";
import Header from "@/components/Navbar/Navbar";




export default function Home() {
  return (

    <main className="h-full w-full">
      <div className="flex flex-col gap-10">
        <Header />
        <AboutPage />
        <Footer />
        
  
   
      
      </div>
    </main>


  
  );
}
