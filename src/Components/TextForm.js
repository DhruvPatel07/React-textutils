import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpEvent = () => {
    // console.log("clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };

  const handleLowEvent = () => {
    // console.log("clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");

  };

  const handleClearEvent = () => {
    // console.log("clicked" + text);
    let newText = '';
    setText(newText);
    props.showAlert("Cleared!", "success");

  };
  const handleOnChange = (Event) => {
    /*  console.log("on change"); */
    setText(Event.target.value);
  };
  const [text, setText] = useState("");

  return (
    <>
      <div className="container" style={{color: props.mode=== 'dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="mybox"
            rows="8"
            value={text}
            onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'grey':'white', color: props.mode=== 'dark'?'white':'#042743'}}
          />
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpEvent}>
          Convet to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLowEvent}>
          Convet to Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearEvent}>
          Clear Text
        </button>
      </div>

      <div className="container my-3" style={{color: props.mode ==='dark'?'white':'#042743'}}>
        <h1>Text Summary</h1>
        <p>
          {text.length === 0 ? 0 : text.split(" ").length} words {text.length} characters
        </p>
        <p>{0.08 * text.split("").length} Minutes Read</p>
        <h1>Preview</h1>
        <p>{text}</p>
      </div>
    </>
  );
}
