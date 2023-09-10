import Image from "next/image";
import React from "react";

const MagnifyingGlass: React.FC = () => {
  return (
    <Image
      src="/magnifying_glass_alt.png"
      alt="Magnifying Glass"
      className="absolute top-0 left-0 z-10 animate-triangle"
      width={150}
      height={150}
    />
  );
};

export default MagnifyingGlass;
