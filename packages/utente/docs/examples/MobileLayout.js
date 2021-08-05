import React from "react";

const MobileLayout = props => {
  return (
    <div
      style={{
        width: 340,
        height: 590,
        borderRadius: 15,
        ...props.style
      }}
    >
      {props.children}
    </div>
  );
};

export default MobileLayout;
