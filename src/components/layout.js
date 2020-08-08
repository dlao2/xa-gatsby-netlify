import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <div className="flex flex-col lg:flex-row bg-blue-500 lg:bg-transparent pt-5 align-top lg:pin-t lg:absolute w-full text-white">
          <div className="flex-1 pl-5">
            <Link to="/"><span className="text-xl text-white">Chi Alpha at UNC</span></Link>
          </div>
          <div className="flex-grow pl-10 pr-6">
            <ul className="list-reset text-right flex flex-col lg:flex-row items-center justify-between">
              <li className="py-3 lg:py-0"><Link activeClassName="font-bold" to="/">Home</Link></li>
              <li className="py-3 lg:py-0"><Link activeClassName="font-bold" to="/about">About</Link></li>
              <li className="py-3 lg:py-0"><Link activeClassName="font-bold" to="/staff">Staff</Link></li>
              <li className="py-3 lg:py-0"><Link activeClassName="font-bold" to="/men">Men</Link></li>
              <li className="py-3 lg:py-0"><Link activeClassName="font-bold" to="/women">Women</Link></li>
              <li className="py-3 lg:py-0"><Link activeClassName="font-bold" to="/testimonials">Testimonials</Link></li>
              <li className="py-3 lg:py-0"><Link activeClassName="font-bold" to="/give">Give</Link></li>
              <li className="py-3 lg:py-0"><Link activeClassName="font-bold" to="/resources">Resources</Link></li>
              <li className="py-3 lg:py-0"><a href="https://uncchialpha.podbean.com">Podcast</a></li>
            </ul>
          </div>
        </div>
      </header>
      <main>{children}</main>
      <footer>
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
      </footer>
    </div>
  )
}

export default Layout
