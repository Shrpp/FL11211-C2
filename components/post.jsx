import Image from "next/image";
import Link from "next/link";
import { downloadMarkdownPost, getMetadataPost } from "../utils/utils";
import { useState, useEffect } from "react";

export function Post_miniature({ name }) {
  return (
    <article className="flex flex-col place-items-center justify-center content-center p-3 md:p-5 text-center bg-slate-800 rounded-2xl h-full w-full shadow-md">
      <header className="flex flex-col bg-slate-500 w-full">
        <Image src="/400x400.svg" alt="" height={400} width={400} />
        <h2 className="text-white">{name}</h2>
        <br></br>
      </header>
      <Link
        href={"/post/" + name}
        className="rounded-md border-b-4 border-red-700"
      >
        See the post
      </Link>
    </article>
  );
}

export function Post({ post_name }) {
  const [isLoading, setIsLoading] = useState(true);
  const [postContent, setPostContent] = useState(null);
  useEffect(() => {
    downloadMarkdownPost(post_name)
      .then((data) => {
        setPostContent(data);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));

  }, []);

  if (isLoading) return <p>Loading ...</p>;
  if (postContent) {
    return (
      <article>
        {String(postContent)} {post_name}
      </article>
    );
  }
}
