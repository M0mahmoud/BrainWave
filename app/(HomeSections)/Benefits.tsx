import Heading from "../components/Heading";
import Section from "../components/Section";
import { benefits } from "../constants";

export default function Benefits() {
  return (
    <Section id="benefits" crosses>
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Chat Smarter, Not Harder with Brainwave"
        />

        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item) => (
            <div key={item.id}></div>
          ))}
        </div>
      </div>
    </Section>
  );
}
