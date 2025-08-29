import Header from "./Header";

export default function Loading() {
  return (
    <>
      <div className="d-flex justify-content-center">
        <div
          className="spinner-border m-5"
          style={{width: "3rem", height: "3rem"}}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  );
}
