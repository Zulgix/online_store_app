import React from "react";
import { useSpring, animated } from "react-spring";

function FadeWrap(props) {
  const animProps = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    duration: 20000,

    config: {
      mass: 5,
      tension: 2800,
      friction: 60,
      duration: 2000,
    },
  });

  return <animated.div style={animProps}>{props.children}</animated.div>;
}

export default FadeWrap;
