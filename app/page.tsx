import Hero from "./components/Hero";
import Intro from "./components/Intro";
import MissionVision from "./components/MissionVision";
import CoreAreas from "./components/CoreAreas";
import Identity from "./components/Identity";
import ChallengesBlessings from "./components/ChallengesBlessings";
import CTA from "./components/CTA";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col bg-white">
       {/* NAVBAR FULL WIDTH */}
        <header className="w-full">
          <Navbar />
        </header>
      <Hero />

      <Intro />
      <MissionVision />
      <CoreAreas />
       {/* FOOTER FULL WIDTH */}
        <footer className="w-full">
          <Footer />
        </footer>
    </main>
  );
}