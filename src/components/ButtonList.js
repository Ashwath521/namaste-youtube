import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const buttonList = [
    "All",
    "Gaming",
    "Songs",
    "Live",
    "Cricket",
    "News",
    "Soccer",
    "Cooking",
    "Latest",
    "Trending",
    "coding",
  ];
  return (
    <div className="flex justify-between">
      {buttonList.map((items, index) => {
        return <Button key={index} name={items} />;
      })}
    </div>
  );
};

export default ButtonList;
