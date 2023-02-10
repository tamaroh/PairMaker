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
        <Input setStudents={setStudents} />
        <Button
          students={students}
          setCount={setCount}
          setPairs={setPairs}
        />
      </div>

      {count ? (
        <div>
          <p className="display">〜〜〜 Pairs 〜〜〜</p>
          {/* issue #15 ペア作成後の結果表示が読みにくい*/}
          <div className="each-pair">
            {JSON.stringify(pairs)}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Display;
