import Image from "next/image";
import Link from "next/link";
import { smallSphere, stars } from "../assets";
import Heading from "../components/Heading";
import PricingList from "../components/PricingList";
import Section from "../components/Section";
export default function Pricing() {
  return (
    <Section id="pricing" crosses className="overflow-hidden">
      <div className="container relative z-2">
        <div className="relative flex justify-center mb-24">
          <Image
            src={smallSphere.src}
            className="relative w-1/2 z-1 sm:w-auto"
            width={255}
            height={255}
            alt="Sphere"
            loading="lazy"
          />
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <Image
              src={stars.src}
              className="object-cover w-full"
              width={950}
              height={400}
              alt="Stars"
              loading="lazy"
            />
          </div>
        </div>

        <Heading
          tag="Get started with Brainwave"
          title="Pay once, use forever"
        />

        <div className="relative">
          <PricingList />
        </div>

        <div className="flex justify-center mt-10">
          <Link
            className="text-xs font-bold tracking-wider uppercase border-b font-code"
            href="/pricing"
          >
            See the full details
          </Link>
        </div>
      </div>
    </Section>
  );
}
