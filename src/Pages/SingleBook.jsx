import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getBooks } from "../Redux/action";

const SingleBook = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.reducer.books);
  const [currentBook, setCurrentBook] = useState({});

  useEffect(() => {
    if (!data.length) {
      dispatch(getBooks());
    }
     // eslint-disable-next-line
  }, [dispatch]);

  useEffect(() => {
    console.log(id)
    if (id) {
      const temp = data.find((data) => data.id === +id);
      temp && setCurrentBook(temp);
   console.log(temp,"tempre")
    }

   
  }, [data, id]);



  return (
    <div style={{ textAlign: "center" }}>
    
      <h2>
        <b>Name:</b> {currentBook.title}
      </h2>
      <p>
        {/* <b>Category:</b> {currentBook.department.title} */}
      </p>
      <p>
        {/* <b>Author:</b> {currentBook?.location.title} */}
      </p>
      <div
      >
        <p>
          <b>Year:</b>
          {/* {currentBook?.function.title} */}
        </p>
        <p>
          <b>Chapters:</b>
          {/* {currentBook?.no_of_chapter} */}
        </p>
      </div>
     
    </div>
  );
};

export default SingleBook;
