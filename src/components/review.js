import { useState, useEffect } from "react";

const Reviews = (props) => {
  const [review, setReview] = useState("");

  function mapPopularity(value) {
    var result = ((value - 1) / (1 + 101)) * 5;

    return Math.ceil(result);
  }

  useEffect(() => {
    var popularity = mapPopularity(props.popularity);
    var reviewStr = "";
    for (var i = 0; i < popularity; i++) {
      reviewStr += "⭐";
    }
    setReview(reviewStr);
  });

  return <div>{review}</div>;
};

export default Reviews;
