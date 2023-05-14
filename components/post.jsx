import Link from "next/link";
import getDataPost from "../utils/utils";

export default function Post({ name, mode_miniature = false }) {
  if (mode_miniature) {
    return (
      <article className="flex flex-col place-items-center justify-center content-center p-3 md:p-5 text-center bg-slate-800 rounded-2xl h-full w-full shadow-md">
        <header className="flex bg-slate-500 w-full">
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
  } else {
    let post = getDataPost(name).then((post) => {
      {post.data, post.content}
    }).catch(e => console.log(e));
    console.log(post);
    return <></>;
  }
}
