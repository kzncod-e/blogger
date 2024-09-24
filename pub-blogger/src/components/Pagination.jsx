export default function Page({ setCurrentPage }) {
  return (
    <>
      <div className="join">
        <button className="join-item btn" onClick={() => setCurrentPage(1)}>
          1
        </button>
        <button
          className="join-item btn btn-active"
          onClick={() => setCurrentPage(2)}>
          2
        </button>
      </div>
      ;
    </>
  );
}
