export async function frontpageData() {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "a080cacb5840599e7f5d7a673b8e6f",
    },
    body: JSON.stringify({
      query: `query MyQuery {
  allProjects {
    id
    slug
    title
    thumbnail {
      responsiveImage {
        alt
        height
        sizes
        src
        srcSet
        width
      }
    }
    semester
  }
}
`,
    }),
  };

  const res = await fetch("https://graphql.datocms.com/", options);
  const data = await res.json();
  return data;
}
