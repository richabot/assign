import React from "react";
import BookCard from "./BookCard";
import { useEffect } from "react";
import { getBooks } from "../Redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams, useLocation, Link } from "react-router-dom";

const BookLIst = () => {
  const data = useSelector((state) => state.reducer.books);
  const [searchParams] = useSearchParams();

  const location = useLocation();

  const dispatch = useDispatch();

  useEffect(() => {
   

     if (location.search === "") {
      dispatch(getBooks());
    }
    
  }, []);


  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "20px",
        height: "97vh",
        overflow: "scroll",
      }}
    >
      {data?.map((item) => (
        <Link key={item.id} to={`/books/${item.id}`}>
          <BookCard item={item} />
        </Link>
      ))}
    </div>
  );
};

export default BookLIst;
