import React from "react"

const BaseBanner = props => {
  return (
    <div
      className={`w-full flex text-center items-center bg-center ${props.className}`}
      style={{
        background:
          (props.showColorOverlay
            ? "linear-gradient(0deg, rgba(99, 179, 237, 0.5), rgba(99, 179, 237, 0.5)),"
            : "") +
          "url(/" +
          props.img +
          ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover, cover",
      }}
    >
      <h1
        className="flex-1 text-white"
        style={{
          fontFamily: ["Underland", "sans-serif"],
          fontSize: "4rem",
          transform: "rotate(-10deg)",
        }}
      >
        {props.text}
      </h1>
    </div>
  )
}

export default BaseBanner
