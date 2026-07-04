import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-shoplytics-bg flex flex-col items-center justify-center p-8">
      
      <div className="max-w-3xl text-center space-y-8 bg-shoplytics-surface p-12 rounded-3xl shadow-card border border-gray-100">
        
        <div className="inline-block bg-green-50 text-shoplytics-primary font-semibold px-4 py-1.5 rounded-full text-sm mb-2 border border-shoplytics-primary/20">
          ✨ Best Prices. All in One Place.
        </div>

        <h1 className = "text-6xl font-extrabold tracking-tight pb-2">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-shoplytics-primary to-blue-600">Shoplytics</span>🛒
        </h1>

        <h1 className="text-5xl md:text-6xl font-extrabold text-shoplytics-textMain tracking-tight">
          Find the best deals <br/>
          <span className="text-shoplytics-primary">across every store.</span>
        </h1>
        
        <p className="text-lg text-shoplytics-textMuted max-w-xl mx-auto">
          Compare prices from Amazon, Flipkart, Myntra, and other platforms in seconds. Never overpay again.
        </p>

        <div className="pt-8">
          <Link href="/home">
            <button className="bg-shoplytics-primary hover:bg-shoplytics-primaryHover text-white font-bold text-lg px-10 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1">
              Start Searching Now
            </button>
          </Link>
        </div>
      </div>
      
      <div className="mt-12 text-shoplytics-textMuted text-sm flex flex-wrap justify-center gap-8 font-medium">
        <span className="flex items-center gap-2">⏱️ Save Time & Money</span>
        <span className="flex items-center gap-2">🔔 Price Drop Alerts</span>
        <span className="flex items-center gap-2">🛡️ 100% Free Forever</span>
      </div>

    </div>
  );
}