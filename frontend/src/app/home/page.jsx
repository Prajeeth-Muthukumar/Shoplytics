import Image from "next/image";
import Navbar from "../components/Navbar";
import ProductCard from "../components/SearchCard";
import TrendingCard from "../components/TrendingCard";

export default function HomePage(){
    return(
        <div className="min-h-screen bg-shoplytics-bg">
            <Navbar />
            <main className="max-w-7xl mx-auto pt-6 px-4 sm:px-6 lg:px-8">
                <div className="space-y-6">
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
            </main>
        </div>
    );
}