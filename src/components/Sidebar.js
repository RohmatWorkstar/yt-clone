import React from "react";
import { categories } from "../utility/utility";

const Sidebar = ({ selectCategory, setSelectCategory, setVideos }) => {
  return (
    <div className="flex sm:flex-col sm:basis-4/12 px-2">
      {categories.map((category, i) => {
        return (
          <button
            onClick={() => {
              setSelectCategory(category.name);
              setVideos([]);
            }}
            key={i}
            className="p-2 flex items-center"
            style={{ backgroundColor: selectCategory === category.name ? "red" : "white", color: selectCategory === category.name ? "white" : "black" }}
          >
            <span className="mr-2">{category.icon}</span>
            <span>{category.name}</span>
          </button>
        );
      })}
    </div>
  );
};

export default Sidebar;
