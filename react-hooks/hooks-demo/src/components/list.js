import React, { useState, useEffect } from "react";

const List = (props) => {
  const [list, setList] = useState([1, 2, 3, 4]);

  useEffect(() => {
    const list1 = [1, 2, 3, 4, 5];
    setList(list1);
    console.log(list);
  }, []);

  return (
    <div className="">
      <h1>hooks 使用 </h1>
      {list.map((item) => (
        <div
          className="name"
          key={item.value}
          onClick={() => this.changeCity(item)}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default List;
