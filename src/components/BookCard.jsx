import React from "react";

const BookCard = ({ item }) => {
  // console.log(item)
  return (
    <div
      style={{ border: "1px solid", padding: "1%", boxSizing: "border-box" }}
    >
      
      <p style={{ margin: 0 }}>
        {item?.title}
      </p>
      <p style={{ margin: 0 }}>
         {item.location?.title}
      </p>
      <p style={{ margin: 0 }}>
         {item.department?.title}
      </p>
      <p style={{ margin: 0 }}>
        {item.function?.title}
      </p>
    </div>
  );
};

export default BookCard;
