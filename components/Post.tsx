"use strict";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from '@portabletext/react';
import { client } from "@/sanity/lib/client";
import { RichTextComponents } from "./RichTextComponents";
import AuthorRichTextComponent from "./AuthorBio";

const builder = imageUrlBuilder(client);

export default function Post({ post }: { post: any }) {
    return (
        <article className="px-10 pb-28">
            <section className="space-y-2 border-[#ff6600] !rounded-xl text-white pb-10">
                <div className="relative !rounded-xl min-h-56 flex flex-col md:flex-row justify-between">
                    <div className="absolute !rounded-xl top-0 w-full h-full opacity-10 blur-sm p-10">
                        <Image
                            className="!rounded-xl object-cover object-center mx-auto"
                            src={builder.image(post.mainImage).url()}
                            alt={post.author.name}
                            fill
                        />
                    </div>

                    <section className="p-5 bg-[#ff6600] w-full !rounded-xl">
                        <div className="flex flex-col md:flex-row justify-between gap-y-5">
                            <div>
                                <h1 className="text-4xl font-extrabold">{post.title}</h1>
                                <p className="">
                                    {new Date(post._createdAt).toLocaleDateString("en-US", {
                                        day: "numeric",
                                        month: "long",
                                        year: "numeric",
                                    })}
                                </p>
                            </div>

                            <div className="flex items-center space-x-2">
                                <Image
                                    className=" border-2 border-white rounded-full"
                                    src={builder.image(post.author.image).url()}
                                    alt={post.author.name}
                                    height={40}
                                    width={40}
                                />

                                <div className="w-64">
                                    <h3 className="text-lg font-bold">{post.author.name}</h3>
                                    <div className="text-sm line-clamp-2 italic overflow-hidden">
                                        <AuthorRichTextComponent bio={post.author.bio} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="italic pt-10">{post.description}</h2>
                            <div className="flex items-center justify-end mt-auto space-x-2">
                                {post.categories.map((category: any) => (
                                    <p key={category._id} className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-semibold mt-4">
                                        {category.title}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </section>

            <PortableText value={post.body} components={RichTextComponents} />
        </article>
    );
}