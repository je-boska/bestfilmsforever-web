import type { ErrorPayload } from '../types/shared';

function getErrorMessage(payload: ErrorPayload) {
  return payload.errors[0].message;
}

export async function contentfulQuery(query) {
  const res = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${
      import.meta.env.PUBLIC_CONTENTFUL_SPACE_ID
    }`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${
          import.meta.env.PUBLIC_CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({
        query,
      }),
    }
  );

  if (res.ok) {
    return res.json();
  } else {
    throw new Error(getErrorMessage(await res.json()));
  }
}
