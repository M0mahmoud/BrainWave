import Image from "next/image";
import React from "react";
import { loading } from "../assets";

const GeneratingInput = ({ className }: { className: string }) => {
  return (
    <div
      className={` flex items-center h-14 px-6 bg-n-8/80 rounded-3xl ${
        className || ""
      } text-base`}
    >
      <Image
        src={loading.src}
        alt="loading"
        className="w-5 h-5 mr-5"
        width={20}
        height={20}
        loading="lazy"
      />
      AI Is Generating...
    </div>
  );
};

export default GeneratingInput;
