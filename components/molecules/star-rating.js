import React from "react";
import Rating from "react-rating";
import StarFill from "assets/icons/Star-Fill.svg";
import StarStroke from "assets/icons/Star-Stroke.svg";

function StarRating(props) {
  return (
    <div className="star-rating">
      <Rating
        {...props}
        emptySymbol={<StarStroke />}
        fullSymbol={<StarFill />}
      />
    </div>
  );
}

export default StarRating;
