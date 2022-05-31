import React, { useState, useEffect } from "react";
import { Header as Title } from "../../components";
import { categories } from "../../api/products/category";

function Header({ dataState }) {
  const { params, setParams } = dataState;

  const [activeCategory, setActiveCategory] = useState(
    params.category || "all"
  );
  const [category, setCategory] = useState([]);

  useEffect(() => {
    categories()
      .then((res) => {
        const { data } = res;
        setCategory(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleClickCategory = (item) => {
    setActiveCategory(item);
    setParams((state) => ({ ...state, category: item, page: 1 }));
  };

  return (
    <Title title="Flyover Stickers">
      <div className="mt-8 mb-8">
        <div className="w-3/4 lg:w-full overflow-x-auto flex flex-row text-gray-500 ">
          <div
            onClick={() => handleClickCategory("all")}
            className={`cursor-pointer ${
              activeCategory === "all"
                ? "font-bold text-blue-500 underline"
                : ""
            } pr-6 underline-offset-4`}
          >
            All
          </div>
          {category.map((item, index) => {
            return (
              <div
                onClick={() => handleClickCategory(item.id)}
                key={index}
                className={`capitalize cursor-pointer pr-6 ${
                  activeCategory === item.id
                    ? "font-bold text-blue-500 underline"
                    : ""
                } `}
              >
                {item.name}
              </div>
            );
          })}
        </div>
      </div>
    </Title>
  );
}

export default Header;
