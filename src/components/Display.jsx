import React from "react";
import Input from "./Input";
import Button from "./Button";

const Display = (props) => {
  let {
    students,
    setStudents,
    count,
    setCount,
    pairs,
    setPairs,
  } = props;
  return (
    <>
      <div>
        <Input students={students} setStudents={setStudents} />
        <Button
          students={students}
          setCount={setCount}
          pairs={pairs}
          setPairs={setPairs}
        />
      </div>

      {count ? (
        <div>
          <p className="display">〜〜〜 Pairs 〜〜〜</p>
          <div className="each-pair">
            {JSON.stringify(pairs)}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Display;
