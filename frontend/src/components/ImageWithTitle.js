import React from "react";

function ImageWithTitle({ theTitle }) {
  return (
    <div className="">
      <div
        className="theBackgroundImage"
        style={{
          backgroundImage: `url("/images/croped.jpg")`,
        }}
      >
        <div className="the__title">{theTitle}</div>
      </div>
    </div>
  );
}

export default ImageWithTitle;
