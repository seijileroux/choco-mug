export default function HeroSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="max-w-xl">
        <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6">
          Открой для себя <br />
          <span className="text-white/90">превосходный вкус</span> <br />в
          каждом глотке!
        </h1>
        <p className="text-gray-400 text-lg mb-10 leading-relaxed">
          У нас кофе – не просто напиток, а искусство. Приглашаем вас на
          уникальное кулинарное путешествие, где каждый глоток – встреча с
          идеальным вкусом.
        </p>
        <button className="bg-[#6BA7A1] text-white px-10 py-4 rounded-full text-lg font-bold hover:shadow-[0_0_20px_rgba(107,167,161,0.4)] transition-all">
          Выбрать кофе
        </button>
      </div>

      <div className="relative flex justify-center">
        <div className="relative w-full max-w-md">
          {/* Main Coffee Cup with Splash */}
          <img
            src="https://csspicker.dev/api/image/?q=coffee+cup+splash&image_type=photo"
            alt="Coffee Splash"
            className="w-full h-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)]"
          />
          {/* Secondary Cup */}
          <img
            src="https://csspicker.dev/api/image/?q=takeaway+coffee&image_type=photo"
            alt="Coffee Cup"
            className="absolute -left-10 bottom-0 w-48 h-auto -rotate-12 drop-shadow-xl"
          />
        </div>
      </div>
    </div>
  );
}
