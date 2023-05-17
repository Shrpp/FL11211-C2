import { useRouter } from "next/router";
import { Post } from "../../components/post";

export default function Posting() {
  const router = useRouter();
  return <Post post_name={router.query.slug} />;
}
