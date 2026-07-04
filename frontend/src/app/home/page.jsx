import Image from "next/image";
import ProductCard from "../components/SearchCard";
import TrendingCard from "../components/TrendingCard";

export default function HomePage(){
    return(
        <div>
            <h1 className="text-sm text-shadow-amber-50 text-shoplytics-primary">Vanakkam</h1>
             <ProductCard 
            title="Apple iPhone 16 (128GB) - Ultramarine"
            price="₹68,999"
            originalPrice="₹79,900"
            discount="14%"
            store="Amazon"
            rating="4.8"
            reviews="12.4K"
            imageUrl="https://m.media-amazon.com/images/I/71UQ3RzH2LL._SX679_.jpg"
            />

            <TrendingCard 
            title="Apple iPhone 16 (128GB)"
            price="₹68,999"
            originalPrice="₹79,900"
            discount="14%"
            store="Amazon"
            imageUrl="https://m.media-amazon.com/images/I/71UQ3RzH2LL._SX679_.jpg"
            />
        </div>
    );
}