import FeaturedProperties from "../components/FeaturedProperties";
// import DummyContent from "../components/DummyContent";
// import Filters from "../components/Filter";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />

      <main className="main">
        <div>
          <FeaturedProperties />
          {/* <DummyContent /> */}
        </div>
      </main>
    </div>
  );
}
