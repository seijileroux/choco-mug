import { StaticImageData } from "next/image";

export interface NavItemProps {
  label: string;
  page: string;
  active?: boolean;
}

export interface ProductCardProps {
  name: string;
  description: string;
  price: string;
  rating: string;
  image: StaticImageData;
}
