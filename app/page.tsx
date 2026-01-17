import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductGrid from "@/components/ProductGrid";
import FeaturesSection from '@/components/FeaturesSection'
import QuizBanner from '@/components/QuizBanner'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1a120b] text-white selection:bg-[#6BA7A1] selection:text-white overflow-x-hidden">
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#3d2b1f] rounded-full blur-[120px] opacity-40" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#2d1e14] rounded-full blur-[100px] opacity-30" />

        {/* Floating Coffee Beans (Simulated with images) */}
        {/* <img
          src="https://csspicker.dev/api/image/?q=coffee+bean&image_type=vector"
          className="absolute top-40 left-10 w-16 opacity-40 rotate-45 animate-pulse"
          alt=""
        />
        <img
          src="https://csspicker.dev/api/image/?q=coffee+bean&image_type=vector"
          className="absolute top-[60%] left-20 w-20 opacity-30 -rotate-12"
          alt=""
        />
        <img
          src="https://csspicker.dev/api/image/?q=coffee+bean&image_type=vector"
          className="absolute bottom-20 right-40 w-24 opacity-50 rotate-90"
          alt=""
        /> */}
      </div>

      <Header />

      <main className="relative z-10 container mx-auto px-8 pt-12 pb-32">
        <HeroSection />
        <ProductGrid />
      </main>

      <FeaturesSection />
      <QuizBanner/>
      <Footer/>
    </div>
  );
}
