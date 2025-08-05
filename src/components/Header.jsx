import { useLoaderData, Link } from "react-router-dom";
import { format } from "date-fns";

export default function Header() {

  const {
    title,
    subtitle,
    image,
    headerType,
    subHeadingTag,
    author,
    created_at,
  } = useLoaderData();

  const SubHeadingTag = subHeadingTag;

  return (
    <>
      <header className="masthead" style={{ backgroundImage: `url(${image})` }}>
        <div className="container position-relative px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <div className={headerType}>
                <h1>{title}</h1>
                <SubHeadingTag className="subheading">{subtitle}</SubHeadingTag>
                {author && (
                  <span className="meta">
                    Posted by &nbsp;
                    <Link to="/">{author}</Link>
                    &nbsp; on {format(new Date(created_at), "MMMM d, yyyy")}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
