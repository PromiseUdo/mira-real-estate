import PropertyCard from "../common/PropertyCard";
import Section from "../common/Section";
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
          <Section
            id="featured"
            title="Featured Properties"
            subtitle="Based on your location"
          >
            <PropertyCard />
          </Section>
          {/* <DummyContent /> */}
        </div>
      </main>
    </div>
  );
}
