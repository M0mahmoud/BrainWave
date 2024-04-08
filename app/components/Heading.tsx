import React from "react";
import brackets from "../design/svg/Brackets";

type Props = {
  className?: string;
  title: string;
  text?: string;
  tag?: string;
};

const Heading = ({ className, title, text, tag }: Props) => {
  return (
    <div
      className={`${
        className || ""
      } max-w-[50rem] mx-auto mb-12 lg:mb-20 md:text-center`}
    >
      {tag && <TagLine className="mb-4 md:justify-center">{tag}</TagLine>}
      {title && <h2 className="h2">{title}</h2>}
      {text && <h2 className="mt-4 body-2 text-n-4">{text}</h2>}
    </div>
  );
};

export default Heading;

const TagLine = ({
  className,
  children,
}: {
  className: string;
  children: string;
}) => {
  return (
    <div className={`tagline flex items-center ${className || ""}`}>
      {brackets("left")}
      <div className="mx-3 text-n-3">{children}</div>
      {brackets("right")}
    </div>
  );
};
