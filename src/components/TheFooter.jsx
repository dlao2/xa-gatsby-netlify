import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons'

const TheNav = () => {
  return (
    <div className="flex flex-row bg-blue-500 py-5 justify-around">
      <a href="https://www.facebook.com/XAatUNC/" target="_blank">
        <FontAwesomeIcon
          icon={faFacebookSquare}
          size="2x"
          className="text-white"
        />
      </a>
      <a href="https://www.instagram.com/uncchialpha/" target="_blank">
      <FontAwesomeIcon
        icon={faInstagram}
        size="2x"
        className="text-white"
      />
      </a>
    </div>
  )
}

export default TheNav
