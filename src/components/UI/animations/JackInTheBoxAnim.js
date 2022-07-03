import React from "react";
import { JackInTheBox } from "react-awesome-reveal";

function JackInTheBoxAnim(props) {
  return (
    <div>
      <JackInTheBox>{props.children}</JackInTheBox>
    </div>
  );
}

export default JackInTheBoxAnim;
