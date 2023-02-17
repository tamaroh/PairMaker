import React from "react";
import Input from "./Input";
import Button from "./Btn";
import Form from 'react-bootstrap/Form';

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
      <Form>
        <Input setStudents={setStudents} />
        <Button
          students={students}
          setCount={setCount}
          setPairs={setPairs}
        />
      </Form>

      {count ? (
        <div>
          <p className="display">ペアを作成しました</p>
        </div>
      ) : null}
    </>
  );
};

export default Display;
