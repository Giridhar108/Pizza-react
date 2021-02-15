import React from "react";
import ContentLoader from "react-content-loader";

function PizzaLoadingBlock() {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={270}
      height={459}
      viewBox="0 0 280 479"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="130" cy="130" r="130" />
      <rect x="-2" y="290" rx="0" ry="0" width="283" height="30" />
      <rect x="-1" y="327" rx="6" ry="6" width="280" height="84" />
      <rect x="5" y="431" rx="6" ry="6" width="83" height="30" />
      <rect x="105" y="424" rx="26" ry="26" width="175" height="43" />
    </ContentLoader>
  );
}

export default PizzaLoadingBlock;
