import Head from "next/head";
import About from "@/components/home_sections/About";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio | Cecilie Jasmin</title>
        <meta
          name="description"
          content="Portfolio for Digital Designer and Frontend Developer, Cecilie Jasmin"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/*   <link rel="icon" href={"/logo-grey.svg"} /> */}
      </Head>

      <main>
        <About></About>
      </main>
    </>
  );
}
