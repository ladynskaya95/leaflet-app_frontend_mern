import React from 'react';

 import { FaAngleDown } from "react-icons/fa";

const Categories = () => {
    const items = [
      "Квартири",
      "Будинки",
      "Апартаменти",
      "Кімнати",
      "Комерційна нерухомість",
    ];
    const subCategory = items.map((item, i) => (
      <li key={i}
        className="bl">
        {item}
      </li>
    ));
    return (
      <>
        <h3 className="bl">Всі категорії</h3>
        <h4>Нерухомість</h4>
        <h2>
          ПІДКАТЕГОРІЇ <FaAngleDown
            style={{ left: "100px", position: "relative", color: "#3072ac" }}
          />
        </h2>
        <ul>
          {subCategory}
          <h4 className="bl">
            Ще <FaAngleDown />
          </h4>
        </ul>
      </>
    );
};

export default Categories;