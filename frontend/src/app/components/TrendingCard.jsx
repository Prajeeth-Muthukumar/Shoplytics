export default function TrendingCard({ 
  title, 
  price, 
  originalPrice, 
  discount, 
  store, 
  imageUrl 
}) {
  return (
    <div className="bg-shoplytics-surface rounded-2xl p-4 shadow-card hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 flex flex-col w-full max-w-[240px]">
      
      <div className="w-full h-40 bg-shoplytics-bg rounded-xl p-4 flex items-center justify-center mb-4">
        <img 
          src={imageUrl} 
          alt={title} 
          className="max-h-full object-contain mix-blend-multiply" 
        />
      </div>

      <div className="flex flex-col flex-grow space-y-1">
        <h3 className="text-sm font-bold text-shoplytics-textMain line-clamp-2">
          {title}
        </h3>
        
        <div className="flex items-end gap-2 pt-1">
          <span className="text-lg font-extrabold text-shoplytics-textMain">{price}</span>
          {originalPrice && (
            <span className="text-xs text-shoplytics-textMuted line-through mb-0.5">
              {originalPrice}
            </span>
          )}
        </div>

        {discount && (
          <span className="text-xs font-bold text-shoplytics-primary">
            {discount} OFF
          </span>
        )}
      </div>

      <div className="mt-4 pt-3 border-t border-gray-100">
        <span className="text-xs font-semibold text-shoplytics-textMuted">
          {store}
        </span>
      </div>

    </div>
  );
}