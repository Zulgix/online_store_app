import React from "react";
import { Zoom } from "react-awesome-reveal";

function ZoomAnim(props) {
  return (
    <div>
      <Zoom duration={1000} left>
        {props.children}
      </Zoom>
    </div>
  );
}

export default ZoomAnim;
