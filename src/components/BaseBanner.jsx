import React from "react"

const BaseBanner = (props) => {
  return (
    <div
      className={ `w-full flex text-center items-center bg-center bg-cover ${ props.className }` }
      style={{
        backgroundImage: 'url(' + props.img + ')'
      }}>
      <h1
        className="flex-1 text-white"
        style={{
          fontFamily: ['Underland', 'sans-serif'],
          fontSize: '4rem',
          transform: 'rotate(-10deg)',
        }}
      >
        { props.text }
      </h1>
    </div>
  )
}

export default BaseBanner
