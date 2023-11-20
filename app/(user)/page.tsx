import Posts from "@/components/Posts";
import { token } from "@/sanity/lib/sanityFetch";
import { draftMode } from "next/headers";
import PreviewPosts from "@/components/PreviewPosts";
import PreviewProvider from "@/components/PreviewProvider";
import { groq } from "next-sanity";
import { client } from "../../sanity/lib/client"

export const revalidate = 60;
export default async function Home() {
  //const posts = await sanityFetch<SanityDocument[]>({ query: postsQuery });
  const query = groq`*[_type=='post'] {
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)`
  const posts = await client.fetch(query);
  const isDraftMode = draftMode().isEnabled;

  if (isDraftMode && token) {
    return (
      <PreviewProvider token={token}>
        <PreviewPosts posts={posts} />
      </PreviewProvider>
    );
  }
  return (
    <main className="">
      <Posts posts={posts} />
      
    </main>
  )
}
