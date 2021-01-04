import React from "react";
import Player from "./Player";
import Cactus from "./Cactus";
import "./style/canvas.css";

class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: true,
    };
  }

  render() {
    return (
      <div className="canvas" id="canvas">
        <Player />
        <Cactus playing={this.state.playing} />
      </div>
    );
  }
}

export default Canvas;

//
