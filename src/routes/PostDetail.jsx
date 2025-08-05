import { useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import NotFound from "./NotFound"

export default function PostDetail() {
  const post = useLoaderData()

  if (post.notFound) return <NotFound />

  return (
    <>
      <Header />
      <article className="mb-4">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              {post.content}
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
