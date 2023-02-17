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
        {/* @miku Inputのstudentsの値はどこで使用しているの？  */}
        <Input students={students} setStudents={setStudents} />
        {/* @miku Buttonのpairsの値はどこで使用しているの？  */}
        <Button
          students={students}
          setCount={setCount}
          pairs={pairs}
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
