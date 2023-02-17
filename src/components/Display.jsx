import React from "react";
import Input from "./Input";
import Button from "./Btn";

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
        <Input setStudents={setStudents} />
        <Button
          students={students}
          setCount={setCount}
          setPairs={setPairs}
        />
      </div>

      {count ? (
        <div>
          <p className="display">ペアを作成しました</p>
        </div>
      ) : null}
    </>
  );
};

export default Display;
