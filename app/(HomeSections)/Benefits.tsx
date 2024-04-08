import Image from "next/image";
import Link from "next/link";
import Heading from "../components/Heading";
import Section from "../components/Section";
import { benefits } from "../constants";
import { GradientLight } from "../design/Benefits";
import Arrow from "../design/svg/Arrow";
import ClipPath from "../design/svg/ClipPath";

export default function Benefits() {
  return (
    <Section id="benefits" crosses>
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Chat Smarter, Not Harder with Brainwave"
        />

        <div className="flex flex-wrap justify-center gap-10 mb-10 overflow-hidden">
          {benefits.map((item) => (
            <div
              key={item.id}
              className="group block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] ">
                <h5 className="mb-5 h5">{item.title}</h5>
                <p className="mb-6 body-2 text-n-3">{item.text}</p>
                <div className="flex items-center mt-auto">
                  <Image
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                    loading="lazy"
                  />
                  <Link
                    href={"/"}
                    className="ml-auto text-xs font-bold tracking-wider uppercase cursor-pointer font-code text-n-1"
                  >
                    Explore more
                  </Link>
                  <Arrow />
                </div>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8 -z-1"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-15">
                  {item.imageUrl && (
                    <Image
                      src={item.imageUrl.src}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="object-cover w-full h-full"
                      loading="lazy"
                    />
                  )}
                </div>
              </div>
              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
