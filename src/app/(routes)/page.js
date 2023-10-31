import Footer from "../common/Footer";
import BedroomGuide from "../components/BedroomGuide";
import CityGuide from "../components/CityGuide";
import FeaturedProperties from "../components/FeaturedProperties";
// import DummyContent from "../components/DummyContent";
// import Filters from "../components/Filter";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import NearCollegeGuide from "../components/NearCollegeGuide";
import NewsletterSignup from "../components/NewsletterSignup";
import PropertyTypeGuide from "../components/PropertyTypeGuide";
import RentCalculator from "../components/RentCalculator";
import RentPropertyPrompt from "../components/RentPropertyPrompt";
import RootLayout from "./layout";
import CustomLayout from "./layout";

export default function Home() {
  return (
    <main className="relative w-full">
      <Hero />

      <FeaturedProperties />
      <CityGuide />
      <RentCalculator />
      <BedroomGuide />
      <PropertyTypeGuide />
      <NearCollegeGuide />
      <NewsletterSignup />
      <Footer />
    </main>
  );
}
