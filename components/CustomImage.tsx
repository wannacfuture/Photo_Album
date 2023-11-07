import { useState } from "react";
import Image from "next/image";

interface CustomImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export const CustomImage = ({ src, alt, width, height }: CustomImageProps) => {
  const [isLoading, setLoading] = useState(true);

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      objectFit="fill"
      className={`
        duration-700 ease-in-out group-hover:opacity-75 cursor-pointer
        ${
          isLoading
            ? "scale-110 blur-2xl grayscale"
            : "scale-100 blur-0 grayscale-0"
        })`}
      onLoadingComplete={() => setLoading(false)}
    />
  );
};
