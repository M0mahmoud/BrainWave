import Image from "next/image";
import Link from "next/link";
import React from "react";
import { socials } from "../constants";
import Section from "./Section";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10" id="footer">
      <div className="container flex items-center justify-center gap-10 sm:justify-between max-sm:flex-col">
        <p className="caption text-n-4 lg:block">
          © {new Date().getFullYear()}. All rights reserved.
        </p>

        <ul className="flex flex-wrap gap-5">
          {socials.map((item) => (
            <li key={item.id}>
              <Link
                href={item.url}
                target="_blank"
                className="flex items-center justify-center w-10 h-10 transition-colors rounded-full bg-n-7 hover:bg-n-6"
              >
                <Image
                  loading="lazy"
                  src={item.iconUrl.src}
                  width={16}
                  height={16}
                  alt={item.title}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;
