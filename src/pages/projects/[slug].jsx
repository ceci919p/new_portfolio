import { slugData, singleProjectData } from "../../queries";
import SingleProject from "../../components/site_layout/SingleProject";
import intro from "@/components/blocks/intro";
import section from "@/components/blocks/section";

export default function singlepageData({ data }) {
  return <SingleProject {...data} />;
}

export async function getStaticPaths() {
  const data = await slugData();
  const results = data.data.allProjects;

  return {
    paths: results.map((a) => {
      return { params: { slug: String(a.slug) } };
    }),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const slug = context.params.slug;
  const data = await singleProjectData(slug);

  return {
    props: { data: data.data.project },
  };
}
