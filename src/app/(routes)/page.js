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

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />

      <main className="main">
        <div>
          <FeaturedProperties />
          <CityGuide />
          <RentCalculator />
          <BedroomGuide />
          <PropertyTypeGuide />
          <NearCollegeGuide />
          <NewsletterSignup />
          <Footer />
        </div>
      </main>
    </div>
  );
}
