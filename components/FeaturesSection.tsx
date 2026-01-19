import Image from "next/image";
import Latte from "@/img/latte.png";

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

export default function FeaturesSection() {
  return (
    <section className="relative z-10 container mx-auto px-8 py-24">
      <h2 className="text-3xl font-black text-center mb-24 tracking-widest">
        Choco Mug ЭТО
      </h2>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
        <div className="flex flex-col gap-24">
          <FeatureItem
            number="1"
            title="Создано со страстью к совершенству"
            description="Начинайте ваш день с бескомпромиссного качества. Мы закладываем основу для вашего идеального момента в каждой детали, чтобы пробудить ваши чувства и зарядить энергией."
          />
          <FeatureItem
            number="2"
            title="Твое пространство для заряда и идей"
            description="Здесь рождается вдохновение. Создайте свой ритуал: место, где вы можете перезагрузиться, найти фокус и подпитать свои самые смелые замыслы в идеальной атмосфере."
          />
        </div>

        <div className="relative">
          <div className="w-64 h-80 bg-[#2d1e14] rounded-full blur-[60px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50" />
          <Image
            src={Latte}
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
            title="Искра в каждой детали"
            description="Превратите обычный момент в исключительный. Наша фундаментальная философия - это внимательность к мелочам, которая создает основу для вашего личного прорыва и наслаждения."
          />
          <FeatureItem
            number="4"
            align="right"
            title="Пристанище для твоего внутреннего огня"
            description="Найдите свою точку равновесия. Это пространство создано, чтобы вы могли сделать паузу, восстановить силы и зажечь новые идеи в окружении, которое питает вашу продуктивность и дух."
          />
        </div>
      </div>
    </section>
  );
}
