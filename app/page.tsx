import Benefits from "./(HomeSections)/Benefits";
import Collaboration from "./(HomeSections)/Collaboration";
import Hero from "./(HomeSections)/hero";
import Pricing from "./(HomeSections)/Pricing";
import Services from "./(HomeSections)/Services";

export default function Home() {
  return (
    <div className="pt-[4.75rem] lg:pt-[5.25rem]">
      <Hero />
      <Benefits />
      <Collaboration />
      <Services />
      <Pricing />
    </div>
  );
}
