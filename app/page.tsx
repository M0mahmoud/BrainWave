import Benefits from "./(HomeSections)/Benefits";
import Collaboration from "./(HomeSections)/Collaboration";
import Hero from "./(HomeSections)/hero";

export default function Home() {
  return (
    <div className="pt-[4.75rem] lg:pt-[5.25rem]">
      <Hero />
      <Benefits />
      <Collaboration />
    </div>
  );
}
