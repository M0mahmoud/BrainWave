import React, { ReactNode } from "react";
import ButtonSvg from "./svg/ButtonSvg";

const Button = ({
  children,
  href,
  className,
  onClick,
  px,
  white,
}: {
  children: string | ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
  px?: string;
  white?: boolean;
}) => {
  const spanClasses = "relative z-10";
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${
    px || "px-7"
  } ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;

  const ButtonContent = () => (
    <button className={classes} onClick={onClick} aria-label="Button">
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );

  const LinkContent = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );

  return href ? LinkContent() : ButtonContent();
};

export default Button;
