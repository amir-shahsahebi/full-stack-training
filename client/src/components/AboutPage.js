import { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const AboutPage = () => {
  const [inputText, setInputText] = useState("");
  const [handleParallelInput, setHandleParallelInput] = useState("");

  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // setText(e.target.describe.value);
    setText(inputText);
  };

  return (
    <div>
      <h3>about page</h3>
      {/* <a href="/">Go To Home Page</a> */}
      <Link to="/">Go To Home Page</Link>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="parallel">type and ses the change online:</label>
          <input
            type="text"
            name="parallel"
            id="parallel"
            value={handleParallelInput}
            onChange={(e) => setHandleParallelInput(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="describe">type and submit to see the changes:</label>
          <input
            type="text"
            name="describe"
            id="describe"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
        </div>
        <Button type="submit">submit</Button>
      </form>
      {text && <p>{text}</p>}
      {handleParallelInput && <p>{handleParallelInput}</p>}
    </div>
  );
};

// SPA = Single Page Application

export default AboutPage;
