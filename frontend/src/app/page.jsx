import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen relative overflow-x-hidden flex flex-col bg-slate-50">
      
      {/* Glowing Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] bg-emerald-500/10 blur-[60px] rounded-full"></div>
        <div className="absolute top-[20%] -right-[20%] w-[60vw] h-[60vw] bg-slate-900/5 blur-[60px] rounded-full"></div>
        <div className="absolute -bottom-[20%] left-[20%] w-[40vw] h-[40vw] bg-amber-400/10 blur-[60px] rounded-full"></div>
      </div>

      <div className="flex-1 flex flex-col justify-center w-full relative z-10 pt-12 lg:pt-24">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center max-w-7xl mx-auto px-6 py-12 lg:py-0 gap-12 lg:gap-16 w-full">
        
        {/* Left Side: Hero Content */}
        <div className="w-full max-w-lg flex flex-col items-center text-center">
          
          <div className="flex items-center justify-center gap-4 text-5xl lg:text-7xl font-black text-slate-900 tracking-tighter mb-5">
            <div className="w-14 h-14 lg:w-20 lg:h-20 bg-gradient-to-br from-emerald-500 to-emerald-700 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/30 font-extrabold text-3xl lg:text-4xl">
              S
            </div>
            Shoplytics
          </div>

          <div className="w-fit inline-flex items-center justify-center px-4 py-2 bg-emerald-500/10 text-emerald-700 rounded-full text-xs font-bold mt-2 mb-6 border border-emerald-500/20 mx-auto">
            ✨ Best Prices. All in One Place.
          </div>

          <h1 className="text-4xl lg:text-5xl leading-tight lg:leading-[1.1] font-extrabold text-slate-900 mb-5 tracking-tight max-w-md mx-auto">
            Find the best deals across <span className="text-emerald-600 relative inline-block whitespace-nowrap z-10">every store.<span className="absolute left-0 bottom-1 w-full h-2.5 bg-emerald-500/20 rounded -rotate-2 -z-10"></span></span>
          </h1>
          
          <p className="text-base text-slate-500 leading-relaxed mb-6 max-w-md font-medium mx-auto">
            Compare prices from Amazon, Flipkart, Myntra, and other trusted platforms in seconds.
          </p>

          <Link href="/home" className="block w-full lg:w-64 mx-auto mb-6 py-4 border-none rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 text-white text-lg font-bold shadow-lg shadow-emerald-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:from-emerald-600 hover:to-emerald-800 text-center">
              Compare Prices
            </Link>
          
          <div className="flex flex-row flex-wrap items-center justify-center gap-4 lg:gap-6 mt-2 mx-auto">
            <span className="flex items-center gap-2 text-sm font-semibold text-slate-500">
              <div className="w-6 h-6 bg-slate-200/50 text-emerald-600 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              </div>
              Save Time & Money
            </span>
            <span className="flex items-center gap-2 text-sm font-semibold text-slate-500">
              <div className="w-6 h-6 bg-slate-200/50 text-emerald-600 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
              </div>
              Price Drop Alerts
            </span>
            <span className="flex items-center gap-2 text-sm font-semibold text-slate-500">
              <div className="w-6 h-6 bg-slate-200/50 text-emerald-600 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
              100% Free Forever
            </span>
          </div>
        </div>

        <div className="w-full max-w-md flex justify-center relative lg:perspective-[1200px]">
          <div className="bg-white/90 backdrop-blur-xl border border-white/80 rounded-3xl p-7 w-full max-w-md shadow-2xl transition-transform duration-500 lg:hover:-rotate-y-2 lg:hover:rotate-x-2 lg:hover:translate-z-6 lg:-rotate-y-6 lg:rotate-x-3 lg:translate-z-2">
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 bg-slate-50 rounded-2xl flex items-center justify-center overflow-hidden border border-slate-200 shadow-inner">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
              </div>
              <div className="flex flex-col justify-center">
                <div className="text-xl font-extrabold text-slate-900 mb-1 tracking-tight">iPhone 16 Pro</div>
                <div className="flex items-center gap-0.5">
                  <span className="text-amber-400 text-sm">★</span>
                  <span className="text-amber-400 text-sm">★</span>
                  <span className="text-amber-400 text-sm">★</span>
                  <span className="text-amber-400 text-sm">★</span>
                  <span className="text-amber-400 text-sm">★</span>
                  <span className="text-xs text-slate-500 ml-1.5 font-semibold">(2.4k reviews)</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 mb-6">
              <div className="flex justify-between items-center px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 transition-all duration-200 hover:bg-white hover:border-slate-300 hover:scale-[1.02] hover:shadow-md">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded md bg-[#FF9900] flex items-center justify-center text-xs font-black text-white">A</div>
                  <span className="font-bold text-slate-900 text-base">Amazon</span>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="font-extrabold text-lg text-slate-900 leading-none">₹68,999</span>
                  <span className="bg-emerald-500/15 text-emerald-700 text-[10px] font-black px-1.5 py-0.5 rounded text-center uppercase tracking-wider">Lowest Price</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 transition-all duration-200 hover:bg-white hover:border-slate-300 hover:scale-[1.02] hover:shadow-md">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded md bg-[#047BD5] flex items-center justify-center text-xs font-black text-white">F</div>
                  <span className="font-bold text-slate-900 text-base">Flipkart</span>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="font-extrabold text-lg text-slate-900 leading-none">₹69,499</span>
                </div>
              </div>

              <div className="flex justify-between items-center px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 transition-all duration-200 hover:bg-white hover:border-slate-300 hover:scale-[1.02] hover:shadow-md">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded md bg-[#00E676] flex items-center justify-center text-xs font-black text-white">C</div>
                  <span className="font-bold text-slate-900 text-base">Croma</span>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="font-extrabold text-lg text-slate-900 leading-none">₹69,999</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-500 to-emerald-700 text-white p-4 rounded-xl text-center font-bold flex items-center justify-center gap-2 shadow-lg text-base">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              You Save ₹1,000 with Amazon
            </div>
            
          </div>
        </div>
      </div>
      </div>

      <div className="max-w-5xl mx-auto mt-12 px-6 pb-12 text-center relative z-10 w-full shrink-0">
        <h2 className="text-xs font-extrabold text-slate-400 mb-6 tracking-widest uppercase">WE COMPARE PRICES ACROSS 25+ TRUSTED STORES</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {['Amazon', 'Flipkart', 'Myntra', 'Nykaa', 'AJIO', 'Croma'].map((store) => (
            <div key={store} className="bg-white rounded-2xl px-6 py-3 lg:px-8 lg:py-4 font-black text-base text-slate-800 shadow-sm border border-slate-100 transition-all duration-300 flex items-center justify-center hover:-translate-y-1 hover:shadow-lg hover:text-emerald-600">
              {store}
            </div>
          ))}
          <div className="rounded-2xl px-6 py-3 lg:px-8 lg:py-4 font-bold text-slate-500 bg-transparent border-2 border-dashed border-slate-300 transition-all duration-300 flex items-center justify-center hover:bg-slate-100 hover:border-slate-400 hover:text-slate-900 cursor-pointer">
            + More
          </div>
        </div>
      </div>

    </div>
  );
}