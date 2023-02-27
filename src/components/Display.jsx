import React from "react";
import Input from "./Input";
import Button from "./Btn";
import Form from 'react-bootstrap/Form';
import "./components_styles/Display.css"

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
        <div className="container">
          <p className="display">Done!👍</p>
        </div>
      ) : null}
    </>
  );
};

export default Display;
