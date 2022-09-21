import React from "react";
import Editor from "./Editor";
import Output from "./Output";

class App extends React.Component {
  render() {
    return (
      <>
        <h1>Code Editor</h1>
        <p>You can write and preview HTML and CSS code here</p>
        <Editor />
        <Output/>
      </>
    );
  }
}

export default App;
