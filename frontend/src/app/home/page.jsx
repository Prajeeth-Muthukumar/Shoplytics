import Navbar from "../components/Navbar";
import HomeBody from "../components/homeComponents/HomeBody";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-shoplytics-bg">
      <Navbar />
      <HomeBody />
    </div>
  );
}