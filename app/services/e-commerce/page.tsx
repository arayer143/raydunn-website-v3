
import Footer from "@/components/footer";
import Header from "@/components/Navbar";
import EcommerceServicePage from "@/components/Services-Page/e-commerce";





export default function Home() {
  return (

    <main className="h-full w-full">
      <div className="flex flex-col gap-10">
        <Header />
        <EcommerceServicePage />
        <Footer />
  
   
      
      </div>
    </main>


  
  );
}