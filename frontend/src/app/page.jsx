import Link from 'next/link';
import styles from './page.module.css';

export default function LandingPage() {
  return (
    <div className={styles.container}>
      {/* Background Decor */}
      <div className={styles.backgroundBlobs}>
        <div className={styles.blob1}></div>
        <div className={styles.blob2}></div>
        <div className={styles.blob3}></div>
      </div>

      <div className={styles.hero}>
        
        {/* Left Side: Hero Content */}
        <div className={styles.leftContent}>
          
          <div className={styles.logo}>
            <div className={styles.navbarLogoIcon}>
              S
            </div>
            Shoplytics
          </div>

          <div className={styles.pill}>
            ✨ Best Prices. All in One Place.
          </div>

          <h1 className={styles.heading}>
            Find the best deals across <span className={styles.highlight}>every store.</span>
          </h1>
          
          <p className={styles.subtext}>
            Compare prices from Amazon, Flipkart, Myntra, and other trusted platforms in seconds.
          </p>

          <button className={styles.ctaButton}>
            Compare Prices
          </button>
          
          <div className={styles.trustIndicators}>
            <span className={styles.trustItem}>
              <div className={styles.trustIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              Save Time & Money
            </span>
            <span className={styles.trustItem}>
              <div className={styles.trustIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
              </div>
              Price Drop Alerts
            </span>
            <span className={styles.trustItem}>
              <div className={styles.trustIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              100% Free Forever
            </span>
          </div>
        </div>

        {/* Right Side: Floating Card */}
        <div className={styles.rightContent}>
          <div className={`${styles.productCard} ${styles.floatingElement}`}>
            
            <div className={styles.productHeader}>
              <div className={styles.productImage}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                  <line x1="12" y1="18" x2="12.01" y2="18"></line>
                </svg>
              </div>
              <div className={styles.productInfo}>
                <div className={styles.productTitle}>iPhone 16 Pro</div>
                <div className={styles.ratings}>
                  <span className={styles.star}>★</span>
                  <span className={styles.star}>★</span>
                  <span className={styles.star}>★</span>
                  <span className={styles.star}>★</span>
                  <span className={styles.star}>★</span>
                  <span className={styles.ratingCount}>(2.4k reviews)</span>
                </div>
              </div>
            </div>

            <div className={styles.comparisonList}>
              <div className={styles.comparisonItem}>
                <div className={styles.platformInfo}>
                  <div className={styles.platformLogo} style={{ backgroundColor: '#FF9900', color: 'white' }}>A</div>
                  <span className={styles.platformName}>Amazon</span>
                </div>
                <div className={styles.priceContainer}>
                  <span className={styles.price}>₹68,999</span>
                  <span className={styles.lowestBadge}>Lowest Price</span>
                </div>
              </div>
              
              <div className={styles.comparisonItem}>
                <div className={styles.platformInfo}>
                  <div className={styles.platformLogo} style={{ backgroundColor: '#047BD5', color: 'white' }}>F</div>
                  <span className={styles.platformName}>Flipkart</span>
                </div>
                <div className={styles.priceContainer}>
                  <span className={styles.price}>₹69,499</span>
                </div>
              </div>

              <div className={styles.comparisonItem}>
                <div className={styles.platformInfo}>
                  <div className={styles.platformLogo} style={{ backgroundColor: '#00E676', color: 'white' }}>C</div>
                  <span className={styles.platformName}>Croma</span>
                </div>
                <div className={styles.priceContainer}>
                  <span className={styles.price}>₹69,999</span>
                </div>
              </div>
            </div>

            <div className={styles.successBanner}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              You Save ₹1,000 with Amazon
            </div>
            
          </div>
        </div>
        
      </div>

      {/* Trusted Stores Section */}
      <div className={styles.trustedStoresSection}>
        <h2 className={styles.bottomHeading}>WE COMPARE PRICES ACROSS 25+ TRUSTED STORES</h2>
        <div className={styles.logoGrid}>
          <div className={styles.logoCard}>Amazon</div>
          <div className={styles.logoCard}>Flipkart</div>
          <div className={styles.logoCard}>Myntra</div>
          <div className={styles.logoCard}>Nykaa</div>
          <div className={styles.logoCard}>AJIO</div>
          <div className={styles.logoCard}>Croma</div>
          <div className={`${styles.logoCard} ${styles.moreCard}`}>
            + More
          </div>
        </div>
      </div>

    </div>
  );
}