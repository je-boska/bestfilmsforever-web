import { contentfulQuery } from './Query';

export async function getHomePage() {
  const query = /* GRAPHQL */ `
    query HomePageQuery {
      homePage (id: "30Ix1MppGhqfcrFKU1HoY1") {
        title
        reelNumber
        metaDescription
        description {
          json
        }
        memberPhotosCollection {
          items {
            url
            title
            width
            height
          }
        }
        clientsCollection {
          items {
            url
          }
        }
      }
    }`;
  const { data } = await contentfulQuery(query);
  return data.homePage;
}
