import Image from "next/image";
import Link from "next/link";

export default function Gallery({ thumbnail }) {
  const img = thumbnail.responsiveImage;

  return (
    <Image
      className="thumbnail"
      src={img.src}
      alt={img.alt}
      width={img.width}
      height={img.height}
      sizes={img.sizes}
    ></Image>
  );
}
