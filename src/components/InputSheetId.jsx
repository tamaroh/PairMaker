import React from "react";
import Form from "react-bootstrap/Form"; 


const InputSheetId = (props) => {
  return (
    <>
      <Form.Group className="mb-3 w-75 mt-5" controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" rows={10} onChange={(e) => {
          //テキストエリアの名前を取得
          props.setStudents(e.target.value.split(/\n/));
        }}
        placeholder="Enter the names of the students in the text input field, one at a time"/>
      </Form.Group>
    </>
  );
};

export default InputSheetId;
