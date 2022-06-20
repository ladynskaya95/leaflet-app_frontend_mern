
import React from "react";
import { useState } from "react";
import { FaStar } from "react-icons/fa"; 

export default function Rating() {
    
      const [selected, setSelected] = useState(4);
      const startGenerate = (numOfStarts = 5) => {
        return Array(numOfStarts)
          .fill()
          .map((item, i) => (
            <Start
              key={i}
              selected={selected > i}
              onSelected={() => setSelected(i + 1)}
            />
          ));
      };
    const Start = ({ selected, onSelected }) => {
      return (
        <FaStar color={selected ? "ffc700" : "gray"}
         onClick={onSelected} />
      );
    };
  return (
    <div className="rating">
      {startGenerate(5)}
    </div>
  );
}

