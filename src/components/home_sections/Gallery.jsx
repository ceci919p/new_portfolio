import Image from "next/image";
import Link from "next/link";

export default function Gallery({ thumbnail, slug, semester, title }) {
  const img = thumbnail.responsiveImage;

  return (
    <Link href={`/projects/${slug}`} passHref>
      <article className="container">
        <Image
          className="thumbnail"
          src={img.src}
          alt={img.alt}
          width={img.width}
          height={img.height}
          sizes={img.sizes}
        ></Image>
        <div className="overlay">
          <div id="display_text">
            <h2>{title}</h2>
            <p>{semester}</p>
          </div>
        </div>
      </article>
    </Link>
  );
}
