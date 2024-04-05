"use client";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { navigation } from "../constants";
import Button from "../design/Button";

import {
  disablePageScroll,
  enablePageScroll,
  getScrollState,
} from "scroll-lock";

import Image from "next/image";
import { HambugerMenu } from "../design/Header";
import MenuSvg from "../design/svg/MenuSvg";

const Header = () => {
  const path = usePathname();
  const [OpenNav, setOpenNav] = useState(false);

  const toggleNav = () => {
    getScrollState() ? disablePageScroll() : enablePageScroll();
    return setOpenNav((prev) => !prev);
  };

  const handleClick = () => {
    if (!OpenNav) return;
    enablePageScroll();
    setOpenNav(false);
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm">
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a href="#" className="block w-[12rem] xl:mr-8">
          <Image
            src="/brainwave.svg"
            width={190}
            height={40}
            alt="Brainwave"
            priority
          />
        </a>

        <nav
          className={`${
            OpenNav ? "flex" : "hidden"
          } fixed top-[5rem] left-0 bottom-0 bg-n-8  lg:static lg:flex lg:mx-auto lg:bg-transparent w-full `}
        >
          <div className="relative flex flex-col items-center justify-center m-auto z-2 lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                  "" // item.url === path ? "z-2 lg:text-n-1" : "lg:text-n-1/50"
                } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>

          <HambugerMenu />
        </nav>

        <a
          href="#"
          className="hidden mr-8 transition-colors button text-n-1/50 hover:text-n-1 lg:block"
        >
          New Account
        </a>
        <Button className="hidden lg:flex" href="#login">
          Sign in
        </Button>

        <Button className="ml-auto lg:hidden" px={"px-3"} onClick={toggleNav}>
          <MenuSvg openNavigation={OpenNav} />
        </Button>
      </div>
    </header>
  );
};

export default Header;
