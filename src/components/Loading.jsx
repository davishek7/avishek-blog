import Header from "./Header";

export default function Loading() {
  return (
    <>
      <div className="d-flex justify-content-center">
        <div
          class="spinner-border m-5"
          style={{width: "3rem", height: "3rem"}}
          role="status"
        >
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  );
}
