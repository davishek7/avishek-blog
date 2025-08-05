import Header from "../components/Header";

export default function About() {
  return (
    <>
      <Header />
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-md-10 col-lg-8 col-xl-7">
            <p>
              Enthusiastic and dedicated Backend Developer with hands-on
              experience in Python based frameworks like Django, Flask, FastAPI
              and Django REST Framework.Skilled in building RESTful APIs and
              scalable server-side logic.
            </p>
            <p>Currently expanding expertise by learning PHP and Laravel.</p>
          </div>
        </div>
      </div>
    </>
  );
}
