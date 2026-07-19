"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "../components/search/ProductCard"; // Make sure this path points to your ProductCard!

export default function TestPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") ?? "";

  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if(!query) return;

    const fetchProduct = async() => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`http://localhost:8000/api/product?q=${query}`);

            if(!response.ok){
                throw new Error("Failed to Fetch Data from the Scraper");
            }
            const data = await response.json();
            setResults(data.results);
        } catch(err) {
            console.error(err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    fetchProduct();
  }, [query]);

  const allProducts = results ? [...(results.amazon || []), ...(results.flipkart || [])] : [];

  return (
    <main className="min-h-screen bg-[#f8fafc] p-8">
      <h1 className="text-3xl font-bold mb-8">
        Search Results for: "{query}"
      </h1>

       {loading && (
        <div className="text-xl text-blue-600 font-bold mb-8">
          Scraping Amazon and Flipkart in the background... Please wait.
        </div>
      )}

      {error && (
        <div className="text-red-500 font-bold mb-8">
          Error: {error}
        </div>
      )}

      {!loading && results && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          {allProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </main>
  );
}