import React from "react";

const DescItem = (props) => {
  return (
    <div className="desc-Item">
      <img className="desc-Img" src={props.descItem.image}></img> <br />
      <span className="desc-Header">{props.descItem.text}</span> <br />
      <span className="desc-Chance">
        {props.descItem.chance[1] - props.descItem.chance[0] + 1 + "%"}
      </span>
    </div>
  );
};

export default DescItem;
