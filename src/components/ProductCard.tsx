import { Link } from "react-router-dom";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
}

const ProductCard = ({ id, name, price, image }: ProductCardProps) => {
  return (
    <Link 
      to={`/product/${id}`}
      className="group block"
    >
      <div className="aspect-square bg-secondary overflow-hidden mb-4">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover group-hover:opacity-80 transition-opacity duration-300"
        />
      </div>
      <h3 className="text-sm font-light tracking-wider mb-1">{name}</h3>
      <p className="text-sm font-light text-muted-foreground">${price}</p>
    </Link>
  );
};

export default ProductCard;
