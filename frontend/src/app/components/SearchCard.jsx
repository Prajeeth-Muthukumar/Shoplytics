export default function ProductCard({ 
  title, 
  price, 
  originalPrice, 
  discount, 
  store, 
  imageUrl, 
  rating, 
  reviews 
}) {
  return (
    <div className="bg-shoplytics-surface rounded-2xl p-4 md:p-6 shadow-card hover:shadow-lg transition-shadow duration-300 border border-gray-100 flex flex-col md:flex-row gap-6 items-center md:items-start w-full">
      
      {/* 1. Product Image Box */}
      <div className="w-full md:w-48 h-48 flex-shrink-0 bg-shoplytics-bg rounded-xl p-4 flex items-center justify-center">
        <img 
          src={imageUrl} 
          alt={title} 
          className="max-h-full object-contain mix-blend-multiply" 
        />
      </div>

      <div className="flex-grow space-y-2 w-full">
        <h2 className="text-xl font-bold text-shoplytics-textMain leading-tight">
          {title}
        </h2>
        
        <div className="flex items-center gap-2 text-sm">
          <span className="text-yellow-500 font-bold">★ {rating}</span>
          <span className="text-shoplytics-textMuted">({reviews} ratings)</span>
        </div>

        <div className="inline-block mt-2 px-3 py-1 bg-gray-50 text-shoplytics-textMain text-xs font-semibold rounded-md border border-gray-200">
          Sold by: <span className="font-bold">{store}</span>
        </div>
      </div>

      <div className="w-full md:w-56 flex flex-col items-start md:items-end md:text-right space-y-3 md:border-l md:border-gray-100 md:pl-6">
        <div>
          <div className="flex items-center md:justify-end gap-2">
            <span className="text-2xl font-extrabold text-shoplytics-textMain">{price}</span>
            {discount && (
              <span className="text-xs font-bold text-shoplytics-primary bg-green-50 px-2 py-1 rounded">
                {discount} OFF
              </span>
            )}
          </div>
          {originalPrice && (
            <div className="text-sm text-shoplytics-textMuted line-through mt-1">
              {originalPrice}
            </div>
          )}
          <div className="text-xs text-shoplytics-textMuted mt-1">
            ✓ Free Delivery
          </div>
        </div>

        <button className="w-full bg-shoplytics-primary hover:bg-shoplytics-primaryHover text-white font-semibold py-2.5 rounded-lg transition-colors shadow-sm">
          View & Compare
        </button>
      </div>

    </div>
  );
}