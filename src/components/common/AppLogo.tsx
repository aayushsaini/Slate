"use client";
import React, { memo } from "react";
import Image from "next/image";
import Logo from "../../../public/appLogo.svg";

interface LogoProps {
  height?: number;
  width?: number;
  alt: string;
}

// Memoized component - as logo is used in multiple places and doesn't changes unless
// props changes
const AppLogo: React.FC<LogoProps> = memo(
  ({ height = 20, width = 20, alt }) => {
    return <Image src={Logo} height={height} width={width} alt={alt} />;
  }
);

AppLogo.displayName = "AppLogo";

export default AppLogo;
