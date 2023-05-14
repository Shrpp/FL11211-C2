import { useRouter } from "next/router";
import Post from "../../components/post";
import getDataPost from "../../utils/utils";

export default function Posting() {
  const router = useRouter();

  return <Post name={router.query.post_name} />;
}
