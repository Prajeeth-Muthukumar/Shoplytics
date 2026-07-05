import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-shoplytics-surface/80 backdrop-blur-md border-b border-shoplytics-textMuted/20 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer group">
            <div className="w-8 h-8 rounded-lg bg-shoplytics-primary flex items-center justify-center text-white font-bold text-xl shadow-md shadow-shoplytics-primary/30 group-hover:scale-105 transition-transform duration-300">
              S
            </div>
            <span className="font-bold text-xl tracking-tight text-shoplytics-textMain">
              Shop<span className="text-shoplytics-primary">lytics</span>
            </span>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="text-shoplytics-textMain hover:text-shoplytics-primary font-medium transition-colors duration-200">
              Home
            </Link>
            <Link href="/trending" className="text-shoplytics-textMuted hover:text-shoplytics-primary font-medium transition-colors duration-200">
              Trending
            </Link>
            <Link href="/categories" className="text-shoplytics-textMuted hover:text-shoplytics-primary font-medium transition-colors duration-200">
              Categories
            </Link>
            <Link href="/deals" className="text-shoplytics-textMuted hover:text-shoplytics-primary font-medium transition-colors duration-200 flex items-center gap-1">
              Deals
              <span className="bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold animate-pulse">HOT</span>
            </Link>
          </div>

          {/* Search and Action Icons */}
          <div className="flex items-center space-x-4">
            
            {/* Search Bar (Hidden on small screens) */}
            <div className="hidden lg:block relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-4 w-4 text-shoplytics-textMuted group-focus-within:text-shoplytics-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input 
                type="text" 
                placeholder="Search products..." 
                className="block w-64 pl-10 pr-3 py-2 border border-shoplytics-textMuted/30 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-shoplytics-primary/50 focus:border-shoplytics-primary bg-shoplytics-bg transition-all duration-300 placeholder-shoplytics-textMuted text-shoplytics-textMain"
              />
            </div>

            {/* Mobile Search Icon */}
            <button className="lg:hidden p-2 text-shoplytics-textMuted hover:text-shoplytics-primary transition-colors rounded-full hover:bg-shoplytics-bg">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Cart Icon */}
            <button className="relative p-2 text-shoplytics-textMuted hover:text-shoplytics-primary transition-colors rounded-full hover:bg-shoplytics-bg group">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span className="absolute top-1 right-1 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-shoplytics-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-shoplytics-primary"></span>
              </span>
            </button>

            {/* User Profile */}
            <button className="flex items-center gap-2 p-1 pl-2 pr-1 rounded-full border border-shoplytics-textMuted/20 hover:border-shoplytics-primary/50 transition-all bg-shoplytics-bg hover:shadow-sm">
              <span className="hidden sm:block text-xs font-medium text-shoplytics-textMain ml-1">Account</span>
              <div className="h-7 w-7 rounded-full bg-gradient-to-tr from-shoplytics-primary to-emerald-300 flex items-center justify-center text-white text-xs font-bold shadow-sm">
                JD
              </div>
            </button>

          </div>
        </div>
      </div>
    </nav>
  );
}
