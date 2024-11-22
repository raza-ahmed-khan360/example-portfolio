import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import RecentPost from "./components/RecentPost";

export default function Home() {
  return (
    <div>
      <Hero />
      <RecentPost />
      <Features />
      <Footer />
    </div>
  );
}
