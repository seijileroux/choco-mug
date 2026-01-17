import { ChevronRight } from "lucide-react";

export default function QuizBanner() {
  return (
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
  )
}
