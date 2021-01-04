import React from "react";
import "./App.css";
import Canvas from "./components/Canvas";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Canvas />
      </div>
    );
  }
}

export default App;
