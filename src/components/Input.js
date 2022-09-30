import React from "react";

const Input = (props) => {
  return (
    <div className="inputName">
      <textarea
        onChange={(e) => {
          //エリアの名前を取得
          props.setState(e.target.value.split(/\n/));
        }}
      ></textarea>
    </div>
  );
};

export default Input;
