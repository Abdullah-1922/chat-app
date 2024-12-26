import Navbar from "@/components/ui/base/Navbar";
import HeroSection from '../components/ui/base/HeroSection';
import FeatureSection from "@/components/ui/base/FeatureSection";
import UserReviews from "@/components/ui/base/UserReviews";
import Footer from "@/components/ui/base/Footer";


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col ">
    {/* Header */}
    <Navbar  />
    {/* Hero Section */}
    <HeroSection />

    {/* Features Section */}
    <FeatureSection />

    {/* User Reviews Section */}
    <UserReviews />

    {/* Footer */}
    <Footer />
  </div>
  );
}
