import BedroomGuide from "../components/BedroomGuide";
import CityGuide from "../components/CityGuide";
import FeaturedProperties from "../components/FeaturedProperties";
// import DummyContent from "../components/DummyContent";
// import Filters from "../components/Filter";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import PropertyTypeGuide from "../components/PropertyTypeGuide";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />

      <main className="main">
        <div>
          <FeaturedProperties />
          <CityGuide />
          <BedroomGuide />
          <PropertyTypeGuide />
        </div>
      </main>
    </div>
  );
}
