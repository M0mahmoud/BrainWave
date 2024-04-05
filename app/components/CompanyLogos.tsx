import Image from "next/image";
import { companyLogos } from "../constants";

const CompanyLogos = ({ className }: { className: string }) => {
  return (
    <div className={className}>
      <h2 className="mb-6 text-center tagline text-n-1/50">
        Helping people create beautiful content at
      </h2>
      <ul className="flex flex-wrap justify-center gap-5">
        {companyLogos.map((logo, index) => (
          <li
            className="relative flex items-center justify-center w-20 md:w-32 h-9 bg-n-8/50 "
            key={index}
          >
            <Image
              src={logo}
              width={134}
              height={28}
              loading="lazy"
              alt={"company Logo"}
              className="object-cover"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
