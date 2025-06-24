import HeroSection from "@/app/_components/HeroSection";
import BestSellers from "@/app/_components/BestSellers";

const dishes = [
  {
    id: 1,
    name: "Salad Fry",
    category: "Breakfast",
    rating: "5",
    price: 230,
    image: "/placeholder.png",
  },
  {
    id: 2,
    name: "Chicken Fry",
    category: "Lunch",
    rating: "4.5",
    price: 350,
    image: "/placeholder.png",
  },
  {
    id: 3,
    name: "Fish Fry",
    category: "Dinner",
    rating: "4.8",
    price: 400,
    image: "/placeholder.png",
  },
  {
    id: 4,
    name: "Vegetable Salad",
    category: "Breakfast",
    rating: "4.2",
    price: 180,
    image: "/placeholder.png",
  },
  {
    id: 5,
    name: "Fruit Salad",
    category: "Lunch",
    rating: "4.6",
    price: 220,
    image: "/placeholder.png",
  },
  {
    id: 6,
    name: "Grilled Chicken",
    category: "Dinner",
    rating: "4.9",
    price: 500,
    image: "/placeholder.png",
  },
];

export default function Home() {
  return (
    <div>
      <HeroSection />
      <BestSellers dishes={dishes} />
    </div>
  );
}
