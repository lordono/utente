import React from "react";

export function useShareForwardedRef(forwardedRef) {
  // final ref that will share value with forward ref. this is the one we will attach to components
  const innerRef = React.useRef(null);

  React.useEffect(() => {
    // after every render - try to share current ref value with forwarded ref
    if (!forwardedRef) {
      return;
    }
    if (typeof forwardedRef === "function") {
      forwardedRef(innerRef.current);
      return;
    } else {
      // by default forwardedRef.current is readonly. Let's ignore it
      forwardedRef.current = innerRef.current;
    }
  });

  return innerRef;
}
