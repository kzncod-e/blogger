export default function Header({ setCategory, setCurrentPage }) {
  const handleCategoryChange = (categoryId) => {
    setCategory(categoryId);
    setCurrentPage(0); // Reset to the first page whenever a new category is selected
  };

  return (
    <>
      <div className="w-full flex items-center justify-center gap-7 mt-5 bg-base-100 h-14 text-lg">
        <div className="flex flex-end">
          <ul className="flex gap-3">
            <a onClick={() => handleCategoryChange(1)}>
              <li>Business</li>
            </a>
            <a onClick={() => handleCategoryChange(2)}>
              <li>Entertainment</li>
            </a>
            <a onClick={() => handleCategoryChange(3)}>
              <li>News</li>
            </a>
            <a onClick={() => handleCategoryChange(4)}>
              <li>Relaxing</li>
            </a>
            <a onClick={() => handleCategoryChange(5)}>
              <li>Sport</li>
            </a>
          </ul>
        </div>
        <div>
          <form action="" method="get">
            <input
              type="text"
              className="bg-white bg-opacity-10 py-[0.30rem] px-[0.32rem] rounded-[1.1rem]"
              placeholder="search"
            />
          </form>
        </div>
      </div>
    </>
  );
}
