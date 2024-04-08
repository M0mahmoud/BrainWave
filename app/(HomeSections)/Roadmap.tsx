import Image from "next/image";
import { check2, grid, loading1 } from "../assets";
import Heading, { TagLine } from "../components/Heading";
import Section from "../components/Section";
import { roadmap } from "../constants";
import Button from "../design/Button";
import { Gradient } from "../design/Roadmap";

export default function Roadmap() {
  return (
    <Section id="roadmap" className="overflow-hidden" crosses>
      <div className="container md:pb-10">
        <Heading tag="Ready to get started" title="What we’re working on" />

        <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-28">
          {roadmap.map((item) => {
            const status = item.status === "done" ? "Done" : "In progress";

            return (
              <div
                className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
                  item.colorful ? "bg-conic-gradient" : "bg-n-6"
                }`}
                key={item.id}
              >
                <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                  <div className="absolute top-0 left-0 max-w-full">
                    <Image
                      loading="lazy"
                      className="w-full"
                      src={grid.src}
                      width={550}
                      height={550}
                      alt="Grid"
                    />
                  </div>
                  <div className="relative z-1">
                    <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                      <TagLine>{item.date}</TagLine>

                      <div className="flex items-center px-4 py-1 rounded bg-n-1 text-n-8">
                        <Image
                          loading="lazy"
                          className="mr-2.5"
                          src={
                            item.status === "done" ? check2.src : loading1.src
                          }
                          width={16}
                          height={16}
                          alt={status}
                        />
                        <div className="tagline">{status}</div>
                      </div>
                    </div>

                    <div className="mb-10 -my-10 -mx-15">
                      <Image
                        loading="lazy"
                        className="w-full"
                        src={item.imageUrl.src}
                        width={628}
                        height={426}
                        alt={item.title}
                      />
                    </div>
                    <h4 className="mb-4 h4">{item.title}</h4>
                    <p className="body-2 text-n-4">{item.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
          <Gradient />
        </div>

        <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
          <Button href="/roadmap">Our roadmap</Button>
        </div>
      </div>
    </Section>
  );
}
