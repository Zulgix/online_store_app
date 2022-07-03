import React from "react";
import { Slide } from "react-awesome-reveal";

function SlideTopAnim(props) {
  return (
    <div>
      <Slide top>{props.children}</Slide>
    </div>
  );
}

export default SlideTopAnim;
