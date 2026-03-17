import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Timeline from "@/components/Timeline";
import Vision from "@/components/Vision";
import Mission from "@/components/Mission";
import Products from "@/components/Products";
import WhyUs from "@/components/WhyUs";
import QuoteForm from "@/components/QuoteForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Timeline />
        <Vision />
        <Mission />
        <Products />
        <WhyUs />
        <QuoteForm />
      </main>
      <Footer />
    </>
  );
}
