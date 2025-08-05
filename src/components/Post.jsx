import { Link } from "react-router-dom";
import { format } from "date-fns";

export default function Post({ title, slug, subtitle, author, created_at }) {

  return (
    <>
      <div className="post-preview">
        <Link to={`/posts/${slug}`}>
          <h2 className="post-title">{title}</h2>
          <h3 className="post-subtitle">{subtitle}</h3>
        </Link>
        <p className="post-meta">
          Posted by &nbsp;
          <a href="#!">{author}</a>
          &nbsp; on {format(new Date(created_at), "MMMM d, yyyy")}
        </p>
      </div>
      <hr className="my-4" />
    </>
  );
}
