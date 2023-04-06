import React from "react";
import Input from "./Input";
import Button from "./Btn";
import InputSheetId from "./InputSheetId";
import Form from "react-bootstrap/Form";
import "./components_styles/Display.css";

const Display = (props) => {
  let {
    students,
    setStudents,
    count,
    setCount,
    setPairs,
    sheetId,
    setSheetId,
    message,
    setMessage,
  } = props;
  return (
    <>
      <Form>
        <InputSheetId setSheetId={setSheetId} />
        <Input setStudents={setStudents} />
        <Button
          students={students}
          setCount={setCount}
          setPairs={setPairs}
          sheetId={sheetId}
          setMessage={setMessage}
        />
      </Form>

      {count ? (
        <div className="container">
          <p className="display">{message}</p>
        </div>
      ) : null}
    </>
  );
};

export default Display;
