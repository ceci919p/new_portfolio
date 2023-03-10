import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function SingleProject({
  title,
  skills,
  year,
  intro,
  process,
  design,
  code,
  link,
  githubLink,
  splash,
}) {
  const img = splash.responsiveImage;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content={`Read about the ${title} project here.`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Image
        className="splash"
        src={img.src}
        alt={img.alt}
        width={img.width}
        height={img.height}
        sizes={img.sizes}
      ></Image>
    </>
  );
}
