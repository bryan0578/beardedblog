import { groq } from "next-sanity";

// Get all posts
export const postsQuery = groq`
  *[_type == "post" && defined(slug.current)]{
    _id, title, slug
  }
`;

// Get a single post by its slug
export const postQuery = groq`
  *[_type == "post" && slug.current == $slug][0]{ 
    ...,
    author->,
    categories[]->
  }
`;

// Get all post slugs
export const postPathsQuery = groq`
  *[_type == "post" && defined(slug.current)][]{
    "params": { "slug": slug.current }
  }
`;

export const query = groq`
  *[_type=='post'] {
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
`;

export const queryPost = groq`
  *[type=='post' && slug.current == $slug][0]{
    ...,
    author->,
    categories[]->
  }
`;
