import Header from "./Header";
import Card from "./Cards";
import Page from "./Pagination";
import { useState } from "react";
import data from "../data/data";
export default function Home() {
  const [posts, setPost] = useState(data);
  const [category, setCategory] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;
  const indexOfLastPost = currentPage * postsPerPage; //default 1 *10
  const indexOfFirstPost = indexOfLastPost - postsPerPage; //default 10 -10
  const filteredPosts = posts.filter((post) => post.categoryId === category);

  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <>
      <div className="bg-base-300 h-screen">
        <Header setCategory={setCategory} setCurrentPage={setCurrentPage} />
        <div className="flex flex-wrap bg-base-300  gap-4 justify-center items-center h-fit pt-20">
          {category > 0 &&
            filteredPosts.map((post) => {
              return <Card product={post} key={post.id} />;
            })}
          {currentPage > 0 &&
            currentPosts.map((post) => {
              return <Card product={post} key={post.id} />;
            })}
        </div>
        <div className="flex justify-center pt-15">
          <Page setCurrentPage={setCurrentPage} />
        </div>
      </div>
    </>
  );
}
