import supabase from "./init_supabase";
import matter from "gray-matter";

export default async function getDataPost(post_name) {
  const { data: blob, error } = await supabase.storage
    .from("blog_storage")
    .download(`post/${post_name}.md`);

  if (error) {
    console.log(error);
  } else {
    const blob_content = (await blob.text().then((content) => content))
      .toString()
      .trim();
    const { data, content } = matter(blob_content);
    console.log(data, content);
    return { data, content}
  }
}
