import React from "react";
import Player from "./Player";
import "./style/canvas.css";

class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="canvas">
        <Player />
      </div>
    );
  }
}

export default Canvas;

//
