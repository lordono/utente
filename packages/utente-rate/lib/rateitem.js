import React from "react";
import StarFill from "./star/StarFill";
import StarBorder from "./star/StarBorder";
import StarShadow from "./star/StarShadow";
import HeartFill from "./heart/HeartFill";
import HeartBorder from "./heart/HeartBorder";
import HeartShadow from "./heart/HeartShadow";

const RateItem = props => {
  const { shape, variant, ...rest } = props;

  if (shape === "star" && variant === "border") return <StarBorder {...rest} />;
  else if (shape === "star" && variant === "fill")
    return <StarFill {...rest} />;
  else if (shape === "star" && variant === "shadow")
    return <StarShadow {...rest} />;
  else if (shape === "heart" && variant === "border")
    return <HeartBorder {...rest} />;
  else if (shape === "heart" && variant === "fill")
    return <HeartFill {...rest} />;
  else if (shape === "heart" && variant === "shadow")
    return <HeartShadow {...rest} />;
};

export default RateItem;
