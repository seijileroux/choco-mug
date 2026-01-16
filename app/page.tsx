import { ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductGrid from "@/components/ProductGrid";

const FeatureItem = ({
  number,
  title,
  description,
  align = "left",
}: {
  number: string;
  title: string;
  description: string;
  align?: "left" | "right";
}) => (
  <div
    className={`relative flex flex-col ${align === "right" ? "items-end text-right" : "items-start text-left"} max-w-[280px]`}
  >
    <span className="absolute -top-8 text-8xl font-black text-white/5 select-none">
      {number}
    </span>
    <h4 className="text-lg font-bold text-white mb-3 relative z-10">{title}</h4>
    <p className="text-xs text-gray-400 leading-relaxed relative z-10">
      {description}
    </p>
  </div>
);

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

      {/* Features Section */}
      <section className="relative z-10 container mx-auto px-8 py-24">
        <h2 className="text-3xl font-black text-center mb-24 tracking-widest">
          BODRIN ЭТО
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
          <div className="flex flex-col gap-24">
            <FeatureItem
              number="1"
              title="Высокое качество зерен"
              description="Наша страсть к кофе начинается с отбора зерен. Мы уделяем внимание каждой детали, чтобы в каждой чашке вы находили исключительное качество и удовольствие."
            />
            <FeatureItem
              number="2"
              title="Атмосфера вдохновения и уюта"
              description="Наше уютное убежище наполнено атмосферой тепла. Здесь, в окружении отличного сервиса, вы можете расслабиться, наслаждаясь чашкой кофе."
            />
          </div>

          <div className="relative">
            <div className="w-64 h-80 bg-[#2d1e14] rounded-full blur-[60px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50" />
            <img
              src="https://csspicker.dev/api/image/?q=coffee+cup+takeaway&image_type=photo"
              alt="Center Cup"
              className="relative z-10 w-64 drop-shadow-2xl"
            />
            <div className="mt-8 flex justify-center">
              <button className="bg-[#6BA7A1] text-white px-12 py-3 rounded-full font-bold hover:bg-[#5a8d88] transition-all">
                Заказать
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-24">
            <FeatureItem
              number="3"
              align="right"
              title="Индивидуальный подход к каждому гостю"
              description="Мы готовим кофе, отражающий ваши предпочтения, создавая уникальные напитки специально для вас. У нас не просто кофе, а персонализированный опыт."
            />
            <FeatureItem
              number="4"
              align="right"
              title="Профессиональная команда бариста"
              description="Наши бариста имеют большой опыт в варке кофе и готовы продемонстрировать вам все свои превосходные таланты в приготовлении кофе."
            />
          </div>
        </div>
      </section>

      {/* Quiz Banner */}
      <section className="relative z-10 container mx-auto px-8 py-20">
        <div className="bg-gradient-to-r from-white/10 to-transparent backdrop-blur-xl border border-white/10 rounded-[40px] p-12 flex flex-col md:flex-row items-center justify-between overflow-hidden relative">
          <div className="relative z-10 max-w-md">
            <h2 className="text-3xl font-bold mb-8 leading-tight">
              Узнай какой кофе подходит тебе больше всего
            </h2>
            <button className="bg-white/10 border border-white/20 text-white px-8 py-3 rounded-full flex items-center gap-2 hover:bg-white/20 transition-all">
              Пройти тест
              <ChevronRight size={18} />
            </button>
          </div>

          <div className="absolute right-0 bottom-0 w-1/2 h-full pointer-events-none">
            <img
              src="https://csspicker.dev/api/image/?q=coffee+beans+spoon&image_type=photo"
              alt="Coffee Beans"
              className="absolute bottom-[-20%] right-[-10%] w-[500px] rotate-[-15deg]"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 container mx-auto px-8 py-12 border-t border-white/5">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-6 text-xs text-gray-500">
            <a href="#" className="hover:text-white transition-colors">
              Новости кофейни
            </a>
            <a href="#" className="hover:text-white transition-colors">
              телеграм
            </a>
            <a href="#" className="hover:text-white transition-colors">
              инстаграм
            </a>
          </div>
          <div className="text-xs text-gray-600">
            © 2024 BODREN Coffee. All rights reserved.
          </div>
        </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap');
        body {
          font-family: 'Inter', sans-serif;
        }
        .glass-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </div>
  );
}
