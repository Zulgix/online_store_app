import React from "react";
import { Bounce } from "react-awesome-reveal";

function BounceAnim(props) {
  return (
    <div>
      <Bounce>{props.children}</Bounce>
    </div>
  );
}

export default BounceAnim;
