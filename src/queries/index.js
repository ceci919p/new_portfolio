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

export async function slugData() {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "a080cacb5840599e7f5d7a673b8e6f",
    },
    body: JSON.stringify({
      query: `query MyQuery {
        allProjects {
          slug
        }
      }`,
    }),
  };
  const res = await fetch("https://graphql.datocms.com/", options);
  const data = await res.json();
  return data;
}

export async function singleProjectData(slug) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "a080cacb5840599e7f5d7a673b8e6f",
    },
    body: JSON.stringify({
      query: `query MyQuery {
  project(filter: {slug: {eq: "${slug}"}}) {
    id
    title
    skills
    semester
    slug
    splash {
      responsiveImage {
        alt
        height
        sizes
        src
        srcSet
        width
      }
    }
    components {
      ... on IntroRecord {
        id
        description
        githublink
        link
        year
        _modelApiKey
      }
      ... on SectionRecord {
        id
        _modelApiKey
        heading
        text
        image {
          responsiveImage {
            alt
            height
            sizes
            src
            srcSet
            width
          }
        }
      }
    }
  }
}
`,
    }),
  };

  const res = await fetch("https://graphql.datocms.com/", options);
  const data = await res.json();
  return data;
}
