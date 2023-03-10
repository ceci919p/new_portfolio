import Image from "next/image";
import Link from "next/link";

export default function Gallery({ thumbnail, slug }) {
  const img = thumbnail.responsiveImage;

  return (
    <Link href={`/projects/${slug}`} passHref>
      <Image
        className="thumbnail"
        src={img.src}
        alt={img.alt}
        width={img.width}
        height={img.height}
        sizes={img.sizes}
      ></Image>
    </Link>
  );
}
