import React from "react";
import Input from "./Input";
import Button from "./Btn";
import InputSheetId from "./InputSheetId";
import Form from 'react-bootstrap/Form';
import "./components_styles/Display.css"

const Display = (props) => {
  let {
    students,
    setStudents,
    count,
    setCount,
    setPairs,
    sheetId,
    setSheetId
  } = props;
  return (
    <>
      <Form>
        <InputSheetId setSheetId={setSheetId}/>
        <Input setStudents={setStudents} />
        <Button
          students={students}
          setCount={setCount}
          setPairs={setPairs}
          sheetId={sheetId}
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
