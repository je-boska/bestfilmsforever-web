import { contentfulQuery } from './Query';

export async function getImprintPage() {
  const query = /* GRAPHQL */ `
    query ImprintPageQuery {
      imprintPage (id: "I7sjZiMw8wxBBcB5XG56z") {
        title
        imprint {
            json
        }
        contact {
            json
        }
      }
    }`;
  const { data } = await contentfulQuery(query);
  return data.imprintPage;
}
