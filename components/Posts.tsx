import type { SanityDocument } from "@sanity/client";
import { urlFor } from "../sanity/lib/image"
import Image from "next/image";
import { Category } from "@/types";
import { ArrowUpRight } from "lucide-react";
import ClientSideRoute from "./ClientSideRoute";

export default function Posts({ posts = [] }: { posts: SanityDocument[] }) {
  return (
      <div>
        <hr className="border-[#ff6600] mb-10" />

        <div className="grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24">
          {posts.map((post) => (
            <ClientSideRoute route={`/post/${post.slug.current}`}>
              <div key={post._id} className="flex flex-col group cursor-pointer">
                <div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
                <Image className="rounded-xl object-cover object-center lg:object-center" src={urlFor(post.mainImage).url()} alt={post.author} fill />
                  <div className="absolute bottom-0 w-full bg-opacity-20 bg-black rounded-b-xl  backdrop-blur-lg rounded drop-shadow-lg p-5 flex justify-between">
                    <div>
                      <p className="font-bold line-clamp-2">{post.title}</p>
                      <p>
                        {new Date(post._createdAt).toLocaleDateString
                        ("en-US", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </p>
                    </div>
                    
                    <div className="flex flex-col md:flex-row gap-y-2md: gap-x-2 items-center">
                      {post.categories.map((category: Category) => (
                        <div className="bg-[#ff6600] text-center text-black px-3 py-1 rounded-full text-sm font-semibold">
                          <p>{category.title}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-5 flex-1">
                  <p className="underline text-lg font-bold">{post.title}</p>
                  <p className="text-white line-clamp-2">{post.description}</p>
                </div> 
                <p className="mt-5 font-bold flex items-center group-hover:underline">
                  Read Post 
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </p>
              </div>
            </ClientSideRoute>
          ))}
        </div>
      </div>

  );
}


