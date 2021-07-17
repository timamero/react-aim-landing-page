import Nav from "./components/sections/Nav";
import { Hero } from "./components/sections/Hero";
import { WhyAim } from "./components/sections/WhyAim";
import { Features } from "./components/sections/Features";
import { GettingStarted } from "./components/sections/GettingStarted";
import { SignUpCTA } from "./components/sections/SignUpCTA";
import { SubscribeCTA } from "./components/sections/SubscribeCTA";
import { Footer } from "./components/sections/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <WhyAim />
      <Features />
      <GettingStarted />
      <SignUpCTA />
      <SubscribeCTA />
      <Footer />
    </div>
  );
}

export default App;
