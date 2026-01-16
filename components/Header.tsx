import { NavItemProps } from "@/interfaces";
import { ShoppingCart, User } from "lucide-react";

const NavItem = ({ label, active = false }: NavItemProps) => (
  <a
    href="#"
    className={`text-sm transition-colors ${active ? "text-white" : "text-gray-400 hover:text-white"}`}
  >
    {label}
  </a>
);

export default function Header() {
  return (
    <header className="relative z-50 container mx-auto px-8 py-6 flex items-center justify-between">
      <div className="text-2xl font-black tracking-tighter flex items-center gap-1">
        Choco <span className="text-[#6BA7A1]">Mug</span>
      </div>

      <nav className="hidden lg:flex items-center gap-8 bg-white/5 backdrop-blur-md px-8 py-3 rounded-full border border-white/10">
        <NavItem label="Главная" active />
        <NavItem label="Меню" />
        <NavItem label="О нас" />
        <NavItem label="Отзывы" />
        <NavItem label="Акции" />
      </nav>

      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
          <User size={20} />
        </button>
        <button className="p-2 hover:bg-white/10 rounded-full transition-colors relative">
          <ShoppingCart size={20} />
          {/* <span className="absolute top-1 right-1 w-2 h-2 bg-[#6BA7A1] rounded-full" /> */}
        </button>
        <button className="bg-[#6BA7A1] text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-[#5a8d88] transition-all">
          Сделать заказ
        </button>
      </div>
    </header>
  );
}
