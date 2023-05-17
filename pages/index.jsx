import { Post_miniature } from "../components/post";
import supabase from "../utils/init_supabase";
import Head from "next/head";

export default function Home({ last_post }) {
  return (
    <>
      <Head>
        <title>Name post Here</title>
      </Head>
      <section className="flex flex-col place-items-center content-center bg-slate-700 h-screen w-4/5 lg:w-4/6 rounded-md">
        <h1 className="text-xl font-bold capitalize p-2 mx-auto">
          The Lasted Blog posted
        </h1>
        <div className="grid md:grid-cols-2 gap-2 place-items-center content-center h-full">
          {last_post.slice(0, 4).map((post) => {
            return <Post_miniature key={post.id} name={post.name} />;
          })}
        </div>
      </section>
    </>
  );
}

export async function getServerSideProps() {
  let { data: last_post, error } = await supabase
    .from("post")
    .select("*")
    .range(0, 4);
  return { props: { last_post, error } };
}
