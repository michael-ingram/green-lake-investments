import path from 'path';

async function turnHomesIntoPages({ graphql, actions }) {
  const homeTemplate = path.resolve('./src/templates/Home.js');

  const { data } = await graphql(`
    query {
      homes: allSanityHomes {
        nodes {
          id
          name
          slug {
            current
          }
        }
      }
    }
  `);
  data.homes.nodes.forEach((home) => {
    actions.createPage({
      path: `property/${home.slug.current}`,
      component: homeTemplate,
      context: {
        slug: home.slug.current,
        name: home.name,
      },
    });
  });
}

export async function createPages(params) {
  await turnHomesIntoPages(params);
}
