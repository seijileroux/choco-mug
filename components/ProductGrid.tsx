import ProductCard from "./ProductCard";
import Cappuccino from "@/img/cappuccino.png"
import Latte from "@/img/latte.png"
import Mocha from "@/img/mocha.png"

export default function ProductGrid() {
  return (
    <div>
      <div className="mt-32 flex flex-wrap justify-center gap-12">
        <ProductCard
          name="Cappuccino"
          description="20% эспрессо, 40% молока и 40% молочной пенки."
          price="120 р."
          rating="4.9"
          image={Cappuccino}
        />
        <ProductCard
          name="Latte"
          description="30% эспрессо и 70% свежего молока."
          price="140 р."
          rating="5.0"
          image={Latte}
        />
        <ProductCard
          name="Mocha"
          description="20% эспрессо, 50% горячего молока и 30% горячего шоколада."
          price="140 р."
          rating="4.7"
          image={Mocha}
        />
      </div>

      <div className="text-center mt-12">
        <a
          href="#"
          className="text-[#6BA7A1] border-b border-[#6BA7A1] pb-1 hover:text-white hover:border-white transition-all"
        >
          Перейти в меню
        </a>
      </div>
    </div>
  );
}
