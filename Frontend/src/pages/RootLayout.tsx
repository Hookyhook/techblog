import { Outlet } from "react-router-dom";
import { Navbar } from "@components";
import BlogPost from "./blogPost/BlogPost.tsx";
export default function RootLayout() {
  return (
    <>
      <div className=" bg-black min-h-16 sticky">
        <Navbar></Navbar>
      </div>
        <BlogPost/>
      <Outlet></Outlet>
    </>
  );
}
