import Head from "next/head";
import About from "@/components/home_sections/About";
import Splash from "@/components/home_sections/Splash";
import Gallery from "@/components/home_sections/Gallery";
import { ParallaxText } from "./../components/home_sections/ParallaxText";
import { frontpageData } from "../queries";

export default function Home({ data }) {
  console.log(data);
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
        <Splash></Splash>
        <About></About>
        <ParallaxText>Currently Open To Work ~</ParallaxText>

        <section id="projects">
          {data.map((project) => {
            return (
              <article key={project.id}>
                <Gallery {...project} />
              </article>
            );
          })}
        </section>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const data = await frontpageData();
  return {
    props: {
      data: data.data.allProjects,
    },
  };
}
