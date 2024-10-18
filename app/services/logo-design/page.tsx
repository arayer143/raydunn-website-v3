import Footer from "@/components/Footer/footer";
import Header from "@/components/Header/header";
import LogoDesignPage from "@/components/Services-Page/logo-design";






export default function Home() {
  return (

    <main className="h-full w-full">
      <div className="flex flex-col gap-10">
        <Header />
        <LogoDesignPage />
        <Footer />
  
   
      
      </div>
    </main>


  
  );
}