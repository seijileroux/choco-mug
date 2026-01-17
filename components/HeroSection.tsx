import Image from 'next/image'
import Cappuccino from "@/img/cappuccino.png"
import Mocha from "@/img/mocha.png"

export default function HeroSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="max-w-xl">
        <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6">
          Откройте мир<br />
          <span className="text-white/90">изысканного вкуса</span><br />
          в каждой чашке!
        </h1>
        <p className="text-gray-400 text-lg mb-10 leading-relaxed">
          Для нас кофе — это не просто напиток, а настоящее творчество. Отправляйтесь с нами в гастрономическое приключение, где каждый глоток — это откровение и наслаждение безупречным вкусом.
        </p>
        <button className="bg-[#6BA7A1] text-white px-10 py-4 rounded-full text-lg font-bold hover:shadow-[0_0_20px_rgba(107,167,161,0.4)] transition-all">
          Выбрать кофе
        </button>
      </div>

      <div className="relative flex justify-center">
        <div className="relative w-full max-w-md">
          {/* Main Coffee Cup */}
          <Image
            src={Cappuccino}
            alt="Coffee Splash"
            className="w-full h-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)]"
          />
          {/* Secondary Cup */}
          <Image
            src={Mocha}
            alt="Coffee Cup"
            className="absolute -left-10 bottom-0 w-48 h-auto -rotate-12 drop-shadow-xl"
          />
        </div>
      </div>
    </div>
  );
}
