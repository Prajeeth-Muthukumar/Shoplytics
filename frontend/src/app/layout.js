import "./globals.css";

export const metadata = {
  title: "Shoplytics - Best Prices. All in One Place.",
  description: "Find the best deals across every store.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}