import { BlogEntry } from "@components";
import { useSearchParams } from "react-router-dom";

export default function BlogPost() {
  const [searchParams] = useSearchParams();
  const blogPostName = searchParams.get("blogPostName");

  return <BlogEntry entryName={blogPostName!} />;
}
