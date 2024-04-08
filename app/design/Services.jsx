import Image from "next/image";
import { gradient, play } from "../assets";
import ChatBubbleWing from "./svg/ChatBubbleWing";

export const Gradient = () => {
  return (
    <div className="absolute top-0 -left-[10rem] w-[56.625rem] h-[56.625rem] opacity-50 mix-blend-color-dodge pointer-events-none">
      <Image
        loading="lazy"
        className="absolute top-1/2 left-1/2 w-[79.5625rem] max-w-[79.5625rem] h-[88.5625rem] -translate-x-1/2 -translate-y-1/2"
        src={gradient.src}
        width={1417}
        height={1417}
        alt="Gradient"
      />
    </div>
  );
};

export const PhotChatMessage = () => {
  return (
    <div className="absolute top-8 right-8 max-w-[17.5rem] py-6 px-8 bg-black rounded-t-xl rounded-bl-xl font-code text-base lg:top-16 lg:right-[8.75rem] lg:max-w-[17.5rem]">
      Hey Brainwave, enhance this photo
      <ChatBubbleWing className="absolute bottom-0 left-full" />
    </div>
  );
};

export const VideoBar = () => {
  return (
    <div className="absolute bottom-0 left-0 flex items-center w-full p-6">
      <Image
        loading="lazy"
        src={play.src}
        width={24}
        height={24}
        alt="Play"
        className="object-contain mr-3"
      />

      <div className="flex-1 bg-[#D9D9D9]">
        <div className="w-1/2 h-0.5 bg-color-1"></div>
      </div>
    </div>
  );
};
