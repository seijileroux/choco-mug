import { ProductCardProps } from "@/interfaces";
import { Plus, Star } from "lucide-react";
import Image from 'next/image'

const ProductCard = ({
  name,
  description,
  price,
  rating,
  image,
}: ProductCardProps) => (
  <div className="relative group bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 flex flex-col items-center text-center w-64 transition-transform hover:-translate-y-2">
    <div className="absolute -top-16 w-32 h-40 drop-shadow-2xl">
      <Image src={image} alt={name} className="w-full h-full object-contain" />
    </div>
    <div className="mt-20 w-full">
      <div className="flex justify-end mb-2">
        <div className="bg-white/10 px-2 py-0.5 rounded-full flex items-center gap-1">
          <span className="text-xs font-bold text-white">{rating}</span>
          <Star size={10} className="fill-yellow-500 text-yellow-500" />
        </div>
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
      <p className="text-[10px] text-gray-400 leading-relaxed mb-6 px-2">
        {description}
      </p>
      <div className="flex items-center justify-between w-full mt-auto">
        <span className="text-lg font-bold text-white">{price}</span>
        <button className="bg-[#6BA7A1] p-2 rounded-full text-white hover:bg-[#5a8d88] transition-colors">
          <Plus size={18} />
        </button>
      </div>
    </div>
  </div>
);

export default ProductCard;
