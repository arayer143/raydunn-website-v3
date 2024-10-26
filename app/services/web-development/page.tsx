

import Footer from "@/components/Footer/footer";
import Header from "@/components/Navbar/Navbar";
import WebDevelopmentService from "@/components/Services-Page/web-development";




export default function Home() {
  return (

    <main className="h-full w-full">
      <div className="flex flex-col gap-10">
        <Header />
        <WebDevelopmentService />
        <Footer />
  
   
      
      </div>
    </main>


  
  );
}