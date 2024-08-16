import React from "react";
import DescItem from "./descItem/DescItem";

const DescList = (props) => {
  return (
    <ul className="desc-List">
      {props.descArray.map((item) => {
        return (
          <li key={crypto.randomUUID()}>
            <DescItem descItem={item} />
          </li>
        );
      })}
    </ul>
  );
};

export default DescList;
