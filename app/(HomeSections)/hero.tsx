import Image from "next/image";

import { curve, heroBackground, robot } from "../assets";
import CompanyLogos from "../components/CompanyLogos";
import GeneratingInput from "../components/GeneratingInput";
import Section from "../components/Section";
import Button from "../design/Button";
import { BackgroundCircles, Gradient } from "../design/Hero";

export default function Hero() {
  return (
    <Section
      id="hero"
      className="pt-48 -mt-20"
      crosses
      customPaddings
      crossesOffset="lg:translate-y-20"
    >
      <div className="container relative overflow-hidden">
        <div className="relative max-w-5xl mx-auto text-center z-1 max-auto mb-15 md:mb-20 lg:mb-24">
          <h1 className="mb-6 h1">
            Explore the Possibilities of&nbsp;AI&nbsp;Chatting with {` `}
            <span className="relative inline-block">
              Brainwave{" "}
              <Image
                src={curve.src}
                className="absolute left-0 w-full top-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
                loading="lazy"
              />
            </span>
          </h1>
          <p className="max-w-3xl mx-auto mb-6 body-1 text-n-2 lg:mb-8">
            Unleash the power of AI within Brainwave. Upgrade your productivity
            with Brainwave, the open AI chat app.
          </p>
          <Button href="/pricing" white>
            Get started
          </Button>
        </div>

        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24 ">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-2xl">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490] ">
                <Image
                  loading="lazy"
                  width={1024}
                  height={490}
                  alt="Robot Image"
                  src={robot.src}
                  className="w-full scale-150 translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                />

                <GeneratingInput className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />
              </div>
            </div>

            <Gradient />
          </div>

          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <Image
              alt="Hero backgrond"
              className="object-cover w-full"
              width={1440}
              height={1800}
              loading="lazy"
              src={heroBackground.src}
            />
          </div>
          <BackgroundCircles parallaxRef={undefined} />
        </div>
        <CompanyLogos className="relative z-10 my-20 " />
      </div>
    </Section>
  );
}
